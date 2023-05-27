import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import LoginPage from './components/Login'
import './App.scss'
import { useState } from 'react'


function App() {
  const [loading, setLoading] = useState(false)

  const handleLoading = (prop: boolean) => {
    setLoading(prop)
  }

  return (
    <div className="App">
      {loading ? (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
      ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  )
}

export default App

// Page hierarchy
// Landing page (With index set to display Body component)
//    /body
//      /devs
//      /login
//      /signup
// No Page
