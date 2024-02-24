import { Route, Routes } from "react-router-dom";
import ExploreProjects from "./pages/ExploreProjects";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";
import AuthForm from "./components/AuthForm";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthForm type={"Login"} />} />
          <Route path="/register" element={<AuthForm type={"Register"} />} />
        </Route>
        
        <Route path="/" element={<Home />} />
        <Route path="/explore_projects" element={<ExploreProjects />} />
      </Routes>
    </div>
  )
}

export default App