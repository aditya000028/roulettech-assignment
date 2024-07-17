import { Routes, Route } from "react-router-dom";

import ProfilePage from "./pages/profile/Profile";
import ExperiencePage from "./pages/experience/Experience";
import ProjectsPage from "./pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;