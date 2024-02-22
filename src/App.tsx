import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Timeline from './Pages/Timeline'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/timeline' element={<Timeline/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
