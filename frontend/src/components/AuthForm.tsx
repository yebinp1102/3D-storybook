import userIcon from '../../public/images/user.svg'
import emailIcon from '../../public/images/email.svg'
import keyIcon from '../../public/images/key.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/logo.svg';


type Props = {
  type: "Register" | "Login"
}

const AuthForm = ({type}: Props) => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pwd, setPwd] = useState<string>();
  const [confirmPwd, setConfirmPwd] = useState<string>();

  return (
    <div className="p-8 rounded-lg bg-white border border-white  shadow-lg bg-opacity-55">
      {/* <h1 className="mb-12 text-2xl font-bold text-slate-600">{type === "Register" ? "회원가입" : "로그인"}</h1> */}
      <div className="flex gap-4 items-center">
          <img 
            src={logo}
            alt="logo"
            className="w-24 relative bottom-1"
          />
          <div className="flex flex-col">
            <p className="text-xl text-gray-400 font-semibold">Welcome to</p>
            <h1 className=" text-5xl font-black mb-6 text-primary-yellow logo_shadow">Sparkle Tale</h1>
          </div>
        </div>

        <p className="text-gray-600 mb-10 mt-2">
          스파클 테일에 오신 것을 환영 합니다. 스파클 테일의 회원이 되시면 다양한 경험과 혜택을 누릴 수 있습니다. 지금 { type === "Register" ? "회원가입": "로그인"} 하세요!
        </p>
      <form className="flex flex-col gap-8 pt-6">
        {/* ID */}
        {type === "Register" && 
          <div className="border rounded-sm flex">
            <div className='w-12 h-12 bg-primary-pink relative rounded-l-sm'>
              <img src={userIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
            </div>
            <input 
              placeholder="이름" 
              className="py-3 px-3 flex-1 placeholder:text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              />
          </div>
        }

        {/* Email */}
        <div className="border rounded-sm flex">
          <div className='w-12 h-12 bg-primary-pink relative rounded-l-sm'>
            <img src={emailIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
          </div>
          <input 
            type='email'
            placeholder="이메일" 
            className="py-3 px-3 flex-1 placeholder:text-sm" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="border rounded-sm flex">
          <div className='w-12 h-12 bg-primary-pink relative rounded-l-sm'>
            <img src={keyIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
          </div>
          <input 
            placeholder="비밀번호" 
            className="py-3 px-3 flex-1 placeholder:text-sm" 
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        {/* Confirm password */}
        {type === "Register" && 
          <div className="border rounded-sm flex">
            <div className='w-12 h-12 bg-primary-pink relative rounded-l-sm'>
              <img src={keyIcon} alt='user_icon' className='w-[2rem] absolute left-2 top-2' />
            </div>
            <input 
              placeholder="비밀번호 확인" 
              className="py-3 px-3 flex-1 placeholder:text-sm" 
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
          </div>
        }
      
      </form>

      <p className='my-8 text-sm px-2 text-slate-600'>
        {type === "Register" ? "이미 회원이신가요?" : "아직 회원이 아니신가요?"} &nbsp;
        {type === "Register" ? (
          <Link to={'/login'} className='font-bold text-primary-darkred'>로그인 </Link> 
        ) : (
          <Link to={'/register'} className='font-bold text-primary-darkred'>회원가입 </Link> 
        )}
        페이지로 이동하기.
      </p>

      <button 
        type='submit' 
        disabled={pwd !== confirmPwd} 
        className='rounded-sm w-full py-1.5 text-white bg-gradient-to-r from-primary-pink to-orange-300 font-bold tracking-wide text-lg'
      >
        {type === "Register" ? "회원가입" : "로그인"}
      </button>


    </div>
  )
}

export default AuthForm