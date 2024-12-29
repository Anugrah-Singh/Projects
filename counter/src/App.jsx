import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
    console.log("Clicked", counter)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    console.log("Clicked", counter)
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
