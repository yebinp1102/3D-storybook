import { Route, Routes } from "react-router-dom";
import ExploreProjects from "./pages/ExploreProjects";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";
import AuthForm from "./components/AuthForm";
import RootLayout from "./pages/RootLayout";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="w-screen h-full">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthForm type={"Login"} />} />
          <Route path="/register" element={<AuthForm type={"Register"} />} />
        </Route>
        
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore_projects" element={<ExploreProjects />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App