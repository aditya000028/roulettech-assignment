import { Routes, Route } from "react-router-dom";

import ProfilePage from "./pages/Profile";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import ContactMePage from "./pages/Contact-Me";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact-me" element={<ContactMePage />} />
      </Routes>
    </div>
  );
}

export default App;