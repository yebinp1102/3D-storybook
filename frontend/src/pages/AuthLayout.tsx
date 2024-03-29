import { Outlet, useNavigate } from "react-router-dom"
import BgImg from '/images/Royal_Heath.png'
import { useUserContext } from "../context/AuthContext"
import { useEffect } from "react";

const AuthLayout = () => {
  const {user} = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(user.id) navigate('/');
  },[])

  return (
    <div className="flex w-screen h-screen relative">
      <img src={BgImg} className="w-full h-full object-cover absolute -z-10" />
      <div className="absolute w-full h-full bg-black bg-opacity-20"></div> 

      <main className="absolute right-0 w-full xl:w-[50%] h-full bg-white bg-opacity-80">
        <div className="w-full h-full flex items-center justify-center">
          <section className="flex flex-col max-w-xl w-full">
            <Outlet />
          </section>      
        </div>
      </main>
    </div>
  )
}

export default AuthLayout