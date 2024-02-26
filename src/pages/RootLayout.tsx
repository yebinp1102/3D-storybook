import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
  return (
    <div className="w-full h-full bg-slate-100">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout