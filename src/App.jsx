import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import AgriSupportHome from './Components/Home'
import Login from './Components/Login';
import Signup from './Components/SignUp';
import DashBoard from './Components/DashBoard';

function App() {
  

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<AgriSupportHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
