import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  let myObj = {
    username: 'Hitesh',
    age: 21
  }

  return(
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = 'chaiAurCode' btnText = 'click me' />
      <Card username = 'Anugrah' />
        
    </>
  )
}

export default App
