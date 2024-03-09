import { FC } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <nav style={{display: 'flex', gap: '5px', justifyContent: 'center'}}>
          <a href="/login">Login</a>
          <a href="/">Home</a>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/profile/:email" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
