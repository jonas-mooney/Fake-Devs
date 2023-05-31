import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
