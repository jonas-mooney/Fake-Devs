import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
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
            <Route index element={<Body handleLoading={handleLoading}/>} />
            <Route path="*" element={<NoPage />} />
            <Route path="/login" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  )
}

export default App
