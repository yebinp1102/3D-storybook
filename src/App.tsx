import { Route, Routes } from "react-router-dom";
import ExploreProjects from "./pages/ExploreProjects";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore_projects" element={<ExploreProjects />} />
      </Routes>
    </div>
  )
}

export default App