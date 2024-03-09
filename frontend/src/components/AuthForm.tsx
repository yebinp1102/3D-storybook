import userIcon from '../../public/images/user.svg'
import emailIcon from '../../public/images/email.svg'
import keyIcon from '../../public/images/key.svg'
import {useForm, SubmitHandler} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../public/images/logo.svg';
import { useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { toast } from 'react-toastify';

interface Props {
  type: "Register" | "Login"
}

type FormValues = {
  name: string,
  email: string,
  password: string,
  confirmPwd?: string,
  loginPassword: string
}

const AuthForm = ({type}: Props) => {
  const navigate = useNavigate();

  // 정규표현식 
  // 이름은 한글, 영어, 공백한 허용
  const regExpName = /[^?a-zA-Z0-9/]/
  // 정확한 이메일 주소 체크
  const regExpEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  // 비밀번호는 최소 8자리 이상 영문 대소문자, 숫자, 특수문자가 각각 1개 이상
  const regExgPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;  


  // onChange 이벤트가 있을 때마다 유효성 검사
  const {watch , register, handleSubmit, getValues, setError, clearErrors ,formState: {errors, isValid}, reset} = useForm<FormValues>({mode: 'onChange'});

  useEffect(() => {
    if(watch('password') !== watch('confirmPwd') && watch('confirmPwd')){
      setError('confirmPwd', {
        type: 'password-dismatch',
        message: '비밀번호가 일치하지 않습니다.'
      })
    }else{
      clearErrors('confirmPwd')
    }
  },[watch('password', watch('confirmPwd'))])


  const handleRegister:SubmitHandler<FormValues> = async ({name, email, password}) => {
    const body = {
      name,
      email,
      password
    }

    try{
      const res = await axiosInstance.post('/users/register', body);
      if(res.status === 200) toast.info('회원가입에 성공했습니다.');
      navigate('/login');
    }catch(err){
      toast.info('회원가입에 실패했습니다.');
    }finally{
      reset();
    }
  }

  const handleLogin:SubmitHandler<FormValues> = async ({email, loginPassword}) => {
    const body = {
      email,
      password: loginPassword
    }

    try{
      const res = await axiosInstance.post('/users/login', body);
      if(res.status === 200) {
        console.log(res.data);
        localStorage.setItem('accessToken', res.data.accessToken);
        toast.info('로그인에 성공했습니다.');
      }
      // navigate('/');
    }catch(err){
      console.log(err);
      toast.info('로그인에 실패했습니다. 다시 시도해주세요.')
    }finally{
      reset();
    }

  }


  return (
    <div className="px-12">
      <h1 className=" mb-4 text-2xl font-semibold text-slate-400">{type === "Register" ? "회원가입" : "로그인"}</h1>
      <div className="flex gap-4 items-center relative">
        <img 
          src={logo}
          alt="logo"
          className="w-24 relative bottom-1"
        />
        <h1 className="absolute left-[71px] w-full -bottom-[18px] text-6xl font-black mb-6 logo_shadow text-primary-main">PARKLE TALE</h1>
      </div>

      <p className="text-gray-500 mb-20 mt-4">
        스파클 테일에 오신 것을 환영 합니다. 스파클 테일의 회원이 되시면 다양한 경험과 혜택을 누릴 수 있습니다. 지금 { type === "Register" ? "회원가입": "로그인"} 하세요!
      </p>
      <form className="flex flex-col gap-10" onSubmit={type === "Register" ? handleSubmit(handleRegister) : handleSubmit(handleLogin)}>
        {/* Name */}
        {type === "Register" && 
          <div className="flex_col">
            <div className="border rounded-sm flex">
              <div className='w-12 h-12 bg-primary-main relative rounded-l-sm'>
                <img src={userIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
              </div>
              <input 
                placeholder="이름 (한글, 영어, 공백만 허용)" 
                className="py-3 px-3 flex-1 placeholder:text-sm"
                {...register('name', {pattern: regExpName})}
              />
            </div>
            {errors.name && (
              <div className='text-red-500'>* 이름은 한글, 영어, 공백만 입력해주세요.</div>
            )}
          </div>
        }

        {/* Email */}
        <div className="flex_col">
          <div className="border rounded-sm flex">
            <div className='w-12 h-12 bg-primary-main relative rounded-l-sm'>
              <img src={emailIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
            </div>
            <input 
              type='email'
              placeholder="이메일" 
              className="py-3 px-3 flex-1 placeholder:text-sm" 
              {...register("email", { pattern: regExpEmail})}
            />
          </div>
          {errors.email && (
            <div className='text-red-500'>* 잘못된 이메일 형식입니다.</div>
          )}
        </div>

        {/* Password */}
        <div className="flex_col">
          <div className="border rounded-sm flex">
            <div className='w-12 h-12 bg-primary-main relative rounded-l-sm'>
              <img src={keyIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
            </div>
            {type === "Register" ? (
              <input 
                type='password'
                placeholder='비밀번호(대소문자, 숫자, 특수 문자를 하나 이상 포함하는 8자리 이상)'
                className="py-3 px-3 flex-1 placeholder:text-sm" 
                {...register("password", {pattern: regExgPwd})}
              />
            ): (
              <input 
                type='password'
                placeholder='비밀번호'
                className="py-3 px-3 flex-1 placeholder:text-sm" 
                {...register("loginPassword")}
              />
            )}

          </div>
          {errors.password && type === "Register" && (
            <div className='text-red-500'>* 비밀번호는 대소문자, 숫자, 특수문자가 각각 1개 이상 포함하는 최소 8자리 이상으로 입력해주세요.</div>
          )}
        </div>

        {/* Confirm password */}
        {type === "Register" && 
          <div className="flex_col">
            <div className="border rounded-sm flex">
              <div className='w-12 h-12 bg-primary-main relative rounded-l-sm'>
                <img src={keyIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
              </div>
              <input 
                placeholder="비밀번호 확인" 
                type='password'
                className="py-3 px-3 flex-1 placeholder:text-sm" 
                {...register("confirmPwd", {
                  validate: {
                    matchPassword : (value) => {
                      const {password} = getValues();
                      return password === value || '* 비밀번호가 일치하지 않습니다'
                    }
                  }
                })}
              />
            </div>
            {errors.confirmPwd &&
              <div className='text-red-500'>{`${errors.confirmPwd.message}`}</div>
            }
          </div>
        }

        <p className='mb-12 text-sm px-2 text-slate-600'>
          {type === "Register" ? "이미 회원이신가요?" : "아직 회원이 아니신가요?"} &nbsp;
          {type === "Register" ? (
            <Link to={'/login'} className='font-bold text-green-700'>로그인 </Link> 
          ) : (
            <Link to={'/register'} className='font-bold text-green-700'>회원가입 </Link> 
          )}
          페이지로 이동하기.
        </p>

        <button 
          type='submit' 
          disabled={type === "Register" && !isValid} 
          className='rounded-sm w-full py-2 text-white bg-gradient-to-r to-primary-main from-blue-300 font-bold tracking-wide text-lg'
        >
          {type === "Register" ? "회원가입" : "로그인"}
        </button>

      </form>



    </div>
  )
}

export default AuthForm