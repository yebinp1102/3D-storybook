import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react";
import Footer from "../components/Footer";

const RootLayout = () => {
  const [toggleOn, setToggleOn] = useState<boolean>(true);

  return (
    <div className="w-full bg-slate-100">
      <Navbar toggleOn={toggleOn} setToggleOn={setToggleOn} />
      <div className={`w-full transition-all ${toggleOn ? 'pt-[122px]' : 'pt-[0px]'}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout