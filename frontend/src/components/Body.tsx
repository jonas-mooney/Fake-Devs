import { Routes, Route } from 'react-router-dom'
import '../App.scss'
import DevBox from "./DevBox"
import HomePage from "./HomePage";
import LoginPage from "./Login";
import SignUpPage from "./SignUp";
import NoPage from "./NoPage";

interface BodyProps {
  children: React.ReactNode;
}

const Body = (children: BodyProps) => {
  
  return (
    <div className="body-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devs" element={<DevBox />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </div>
  )
}

export default Body