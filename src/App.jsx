import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeContext";
import LandingPage from "./Components/LandingPage/LandingPage";
import ResumeBuilder from "./Components/ResumeBuilder/ResumeBuilder";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const App = () => {

  return (
    <ResumeProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
        </Routes>
      </Router>
      </LocalizationProvider>

    </ResumeProvider>
  );
};

export default App;
