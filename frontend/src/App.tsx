import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
