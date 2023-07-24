import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Landing from './components/landing/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
