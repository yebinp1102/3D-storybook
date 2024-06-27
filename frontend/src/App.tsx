import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "./pages/LoadingPage";

// 컴포넌트 동적 로드
const ExploreProjects = lazy(() => import("./pages/ExploreProjects"));
const Home = lazy(() => import("./pages/Home"));
const AuthLayout = lazy(() => import("./pages/AuthLayout"));
const AuthForm = lazy(() => import("./components/AuthForm"));
const RootLayout = lazy(() => import("./pages/RootLayout"));
const Cart = lazy(() => import("./pages/Cart"));
const Order = lazy(() => import("./pages/Order"));
const Detail = lazy(() => import("./pages/Detail"));
const Explore = lazy(() => import("./pages/Explore"));
const UploadTemplate = lazy(() => import("./pages/UploadTemplate"));
const Payment = lazy(() => import("./pages/Payment"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <ToastContainer
        position="top-center"
        theme="colored"
        pauseOnHover
        autoClose={1500}
      />
      <Suspense fallback={<LoadingPage />}>
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
      </Suspense>
    </div>
  );
};

export default App;
