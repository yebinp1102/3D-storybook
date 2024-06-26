import { Route, Routes } from "react-router-dom";

// packages
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// Components
import ExploreProjects from "./pages/ExploreProjects";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";
import AuthForm from "./components/AuthForm";
import RootLayout from "./pages/RootLayout";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Detail from "./pages/Detail";
import Explore from "./pages/Explore";
import UploadTemplate from "./pages/UploadTemplate";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <ToastContainer 
        position="top-center"
        theme="colored"
        pauseOnHover
        autoClose={1500}
      />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthForm type={"Login"} />} />
          <Route path="/register" element={<AuthForm type={"Register"} />} />
        </Route>
        
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/explore/detail/:id" element={<Detail />} />
          <Route path="/upload_template" element={<UploadTemplate />} />
          <Route path="/explore_projects" element={<ExploreProjects />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App