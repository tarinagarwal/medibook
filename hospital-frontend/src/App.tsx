import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Step1Initial from "./pages/registration/Step1Initial";
import Step2Facility from "./pages/registration/Step2Facility";
import Step3Documents from "./pages/registration/Step3Documents";
import VerificationPending from "./pages/VerificationPending";
import "./App.css";

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/step1" element={<Step1Initial />} />
        <Route path="/register/step2/:hospitalId" element={<Step2Facility />} />
        <Route
          path="/register/step3/:hospitalId"
          element={<Step3Documents />}
        />
        <Route path="/verification-pending" element={<VerificationPending />} />
      </Routes>
    </Router>
  );
}

export default App;
