import userIcon from "/images/user.svg";
import emailIcon from "/images/email.svg";
import keyIcon from "/images/key.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo.svg";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  useCreateUserAccountMutation,
  useSignInAccount,
} from "../lib/queriesAndMutations";
import { useUserContext } from "../context/AuthContext";

interface Props {
  type: "Register" | "Login";
}

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPwd?: string;
  loginPassword: string;
};

const AuthForm = ({ type }: Props) => {
  const navigate = useNavigate();
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccountMutation();
  const { mutateAsync: signInAccount, isPending: isSigning } = useSignInAccount();
  const { checkAuthUser } = useUserContext();

  // 정규표현식
  // 이름은 한글, 영어, 공백한 허용
  const regExpName = /^[가-힣a-zA-Z\s]+$/;
  // 정확한 이메일 주소 체크
  const regExpEmail =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  // 비밀번호는 최소 8자리 이상 영문 대소문자, 숫자, 특수문자가 각각 1개 이상
  const regExgPwd =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  // onChange 이벤트가 있을 때마다 유효성 검사
  const {
    watch,
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({ mode: "onChange" });

  useEffect(() => {
    if (watch("password") !== watch("confirmPwd") && watch("confirmPwd")) {
      setError("confirmPwd", {
        type: "password-dismatch",
        message: "비밀번호가 일치하지 않습니다.",
      });
    } else {
      clearErrors("confirmPwd");
    }
  }, [watch("password", watch("confirmPwd"))]);

  const handleRegister: SubmitHandler<FormValues> = async ({
    name,
    email,
    password,
  }) => {
    const body = {
      name,
      email,
      password,
    };

    const registerResponse = await createUserAccount(body);
    if (registerResponse !== 200) {
      return toast.error(
        "이미 사용중인 이메일 입니다. 다른 이메일을 입력해주세요."
      );
    } else {
      toast.success("회원가입에 성공했습니다. 로그인 해주세요.");
      reset();
      navigate("/login");
    }
  };

  const handleLogin: SubmitHandler<FormValues> = async ({
    email,
    loginPassword,
  }) => {
    const body = {
      email,
      password: loginPassword,
    };
    const loginResponse = await signInAccount(body);
    if (loginResponse !== 200)
      return toast.error("로그인에 실패했습니다. 다시 시도해주세요.");

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      toast.success("로그인에 성공했습니다.");
      reset();
      navigate("/");
    } else {
      toast.error("올바르지 않은 토큰입니다. 다시 로그인해주세요.");
    }
  };

  console.log(isValid);

  return (
    <div className="px-12">
      <h1 className=" mb-4 text-2xl font-semibold text-slate-400">
        {type === "Register" ? "회원가입" : "로그인"}
      </h1>
      <div className="flex gap-4 items-center relative">
        <img src={logo} alt="logo" className="w-24 relative bottom-1" />
        <h1 className="absolute left-[71px] w-full -bottom-[18px] text-6xl font-black mb-6 logo_shadow text-primary-main">
          PARKLE TALE
        </h1>
      </div>

      <p className="text-gray-500 mb-20 mt-4">
        스파클 테일에 오신 것을 환영 합니다. 스파클 테일의 회원이 되시면 다양한
        경험과 혜택을 누릴 수 있습니다. 지금{" "}
        {type === "Register" ? "회원가입" : "로그인"} 하세요!
      </p>
      <form
        className="flex flex-col gap-10"
        onSubmit={
          type === "Register"
            ? handleSubmit(handleRegister)
            : handleSubmit(handleLogin)
        }
      >
        {/* Name */}
        {type === "Register" && (
          <div className="flex_col">
            <div className="border rounded-sm flex">
              <div className="w-12 h-12 bg-primary-main relative rounded-l-sm">
                <img
                  src={userIcon}
                  alt="user_icon"
                  className="w-[2rem] absolute left-2 top-2"
                />
              </div>
              <input
                placeholder="이름 (한글, 영어, 공백만 허용)"
                className="py-3 px-3 flex-1 placeholder:text-sm"
                {...register("name", { pattern: regExpName })}
              />
            </div>
            {errors.name && (
              <div className="text-red-500">
                * 이름은 한글, 영어, 공백만 입력해주세요.
              </div>
            )}
          </div>
        )}

        {/* Email */}
        <div className="flex_col">
          <div className="border rounded-sm flex">
            <div className="w-12 h-12 bg-primary-main relative rounded-l-sm">
              <img
                src={emailIcon}
                alt="user_icon"
                className="w-[2rem] absolute left-2 top-2"
              />
            </div>
            <input
              type="email"
              placeholder="이메일"
              className="py-3 px-3 flex-1 placeholder:text-sm"
              {...register("email", { pattern: regExpEmail })}
            />
          </div>
          {errors.email && (
            <div className="text-red-500">* 잘못된 이메일 형식입니다.</div>
          )}
        </div>

        {/* Password */}
        <div className="flex_col">
          <div className="border rounded-sm flex">
            <div className="w-12 h-12 bg-primary-main relative rounded-l-sm">
              <img
                src={keyIcon}
                alt="user_icon"
                className="w-[2rem] absolute left-2 top-2"
              />
            </div>
            {type === "Register" ? (
              <input
                type="password"
                placeholder="비밀번호(대소문자, 숫자, 특수 문자를 하나 이상 포함하는 8자리 이상)"
                className="py-3 px-3 flex-1 placeholder:text-sm"
                {...register("password", { pattern: regExgPwd })}
              />
            ) : (
              <input
                type="password"
                placeholder="비밀번호"
                className="py-3 px-3 flex-1 placeholder:text-sm"
                {...register("loginPassword")}
              />
            )}
          </div>
          {errors.password && type === "Register" && (
            <div className="text-red-500">
              * 비밀번호는 대소문자, 숫자, 특수문자가 각각 1개 이상 포함하는
              최소 8자리 이상으로 입력해주세요.
            </div>
          )}
        </div>

        {/* Confirm password */}
        {type === "Register" && (
          <div className="flex_col">
            <div className="border rounded-sm flex">
              <div className="w-12 h-12 bg-primary-main relative rounded-l-sm">
                <img
                  src={keyIcon}
                  alt="user_icon"
                  className="w-[2rem] absolute left-2 top-2"
                />
              </div>
              <input
                placeholder="비밀번호 확인"
                type="password"
                className="py-3 px-3 flex-1 placeholder:text-sm"
                {...register("confirmPwd", {
                  validate: {
                    matchPassword: (value) => {
                      const { password } = getValues();
                      return (
                        password === value || "* 비밀번호가 일치하지 않습니다"
                      );
                    },
                  },
                })}
              />
            </div>
            {errors.confirmPwd && (
              <div className="text-red-500">{`${errors.confirmPwd.message}`}</div>
            )}
          </div>
        )}

        <p className="mb-12 text-sm px-2 text-slate-600">
          {type === "Register"
            ? "이미 회원이신가요?"
            : "아직 회원이 아니신가요?"}{" "}
          &nbsp;
          {type === "Register" ? (
            <Link to={"/login"} className="font-bold text-green-700">
              로그인{" "}
            </Link>
          ) : (
            <Link to={"/register"} className="font-bold text-green-700">
              회원가입{" "}
            </Link>
          )}
          페이지로 이동하기.
        </p>

        <button
          type="submit"
          disabled={!isValid}
          className={` disabled:to-slate-300 disabled:from-slate-300 rounded-sm w-full py-2 text-white bg-gradient-to-r to-primary-main from-blue-300 font-bold tracking-wide text-lg flex gap-6 flex-center`}
        >
          {isCreatingAccount || isSigning && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {type === "Register" ? "회원가입" : "로그인"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
