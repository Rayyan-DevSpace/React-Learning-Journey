import { useState } from 'react'
import SignUp from './signup.jsx';
import Login from './Login.jsx';
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
      
    </>
  )
}

export default App
