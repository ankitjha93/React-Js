import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from '../../03tailwindprops/src/components/Card'

function App() {
  let [counter, setCounter] = useState(15)
 
  // let counter = 5;
  const addValue = () => {
     
   counter = counter + 1;
   setCounter(counter)
   console.log("clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
   <h1>Chai Aur React</h1>
   <h2>Counter Value :{counter}</h2>
   <button
    onClick={addValue}>Add Value {counter}</button>
   <br />
   <button onClick={removeValue}>Remove Value {counter}</button>

   <p>footer : {counter}</p>
      
    </>
  )
}

export default App
