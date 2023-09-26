import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color,setColor] = useState("olive");

  return (
   <div className=' w-screen h-screen' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-gray-400 px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-0 bg-red-600 text-white' onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-4 py-0 bg-yellow-600 text-white' onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-0 bg-green-600 text-white' onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-0 bg-pink-600 text-white' onClick={()=>setColor("pink")}>Pink</button>
        <button className='outline-none px-4 py-0 bg-orange-600 text-white' onClick={()=>setColor("orange")}>Orange</button>
        <button className='outline-none px-4 py-0 bg-cyan-600 text-white' onClick={()=>setColor("cyan")}>Cyan</button>
        <button className='outline-none px-4 py-0 bg-blue-600 text-white' onClick={()=>setColor("blue")}>Blue</button>
      </div>
    </div>
   </div>
  )
}

export default App
