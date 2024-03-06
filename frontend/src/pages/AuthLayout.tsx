import { Outlet } from "react-router-dom"
import BgImg from '../../public/images/Royal_Heath.png'

const AuthLayout = () => {
  return (
    <div className="flex w-screen h-screen relative">
      <img src={BgImg} className="w-full h-full object-cover absolute -z-10" />
      <div className="absolute w-full h-full bg-black bg-opacity-20"></div> 

      <main className="absolute right-0 w-full xl:w-[50%] h-full bg-white bg-opacity-45">
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