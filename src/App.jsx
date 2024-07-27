import React, { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive')

  return (


    < div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 rounded-full'>
        <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-3 rounded-full'
            style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-3 rounded-full'
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-3 rounded-full'
            style={{ backgroundColor: "black", color: "white" }}>Black</button>
          <button onClick={() => setColor("olive")} className='outline-none px-4 py-3 rounded-full'
            style={{ backgroundColor: "olive" }}>Olive</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-3 rounded-full'
            style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-3 rounded-full'
            style={{ backgroundColor: "white" }}>White</button>
        </div>
      </div>
    </div >

  )
}

export default App
