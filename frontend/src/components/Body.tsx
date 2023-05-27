import DevBox from "./DevBox"
import HomePage from "./HomePage";
import Filters from "./Filters"
import LoginPage from "./Login";
import '../App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// interface HandleLoadingFunc {
//   handleLoading: (arg: boolean) => void;
// }

const Body = () => {
  
  return (
    <div className="body-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devs" element={<DevBox />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

    </div>
  )
}

export default Body