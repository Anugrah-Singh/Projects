import './App.css'
import {useState, useCallback, useEffect, useRef} from 'react'


function App() {

  const [length, setLength] = useState(8)
  
  const [numInc, setNumInc] = useState(false)
  
  const [charInc, setCharInc] = useState(false)
  
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numInc) str += "0123456789"
    if(charInc) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~"

    

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numInc, charInc, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numInc, charInc, passwordGenerator])
  
  return (
    <>
    
      <div className='w-full max-w-lg mx-auto shadow-md
      rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center'>
        Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
          <input 
          type="text"
          value={password}
          className='outline-none w-full px-1 py-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
        
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3
          py-0.5 shrink-0'>copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
        
          <div className='flex items-center gap-x-1'>
        
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
        
            <label>Length : {length}</label>
          </div>
        
          <div>
        
            <input 
              type="checkbox" 
              defaultChecked = {numInc}
              id='numberInput'
              onChange={() => {
                setNumInc((prev) => !prev)
              }}            
            />
        
            <label>Number</label>
          </div>
        
          <div>
        
            <input 
              type="checkbox" 
              defaultChecked = {charInc}
              id='charInput'
              onChange={() => {
                setCharInc((prev) => !prev)
              }}            
            />
        
            <label>Character</label>
        
          </div>
        
        </div>
      
      </div>
    
    </>
  )
}

export default App
