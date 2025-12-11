import { useState } from 'react'
import Cards from './Cards.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards
        image="/Pic01.jpg"
        name="Diana Alexis"
        age="28"
        qualification="Completed Master's in Business Administration"
      />
      <Cards
        image="/Pic02.jpg"
        name="Mark Alexander"
        age="24"
        qualification="Completed Bachelor's in Computer Science"
      />
      <Cards
        image="/Pic03.jpg"
        name="Nancy Zheng"
        age="27"
        qualification="Pursuing Master's in Data Science"
      />
    </>
  );
}

export default App
