import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
let myobj ={
  id:1,
  name:"Faizan ALi",
  designation:"Web Develpement"
}
let myarr=[1,2,3];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1  className="text-3xl font-bold underline">Tailwind</h1>
{/* <Card detail={myobj}/> */}
{/* <Card detail={myarr}/> */}
<Card username="Faizan Ali Akbar" btntext="Click me"/>

    </>
  )
}

export default App
