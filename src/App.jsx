import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BirthdayCard from './components/birthday-card/BirthdayCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BirthdayCard />
    </>
  )
}

export default App
