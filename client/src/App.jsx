import './App.css'
import Navbar from './Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
