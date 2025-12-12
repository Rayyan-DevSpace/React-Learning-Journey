import { useState } from 'react'
import SignUp from './signup.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp/>
    </>
  )
}

export default App
