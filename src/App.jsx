import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeContext";
import LandingPage from "./Components/LandingPage/LandingPage";
import ResumeBuilder from "./Components/ResumeBuilder/ResumeBuilder";

const App = () => {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
};

export default App;
