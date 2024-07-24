import { useEffect, useRef } from 'react'
import './App.css'

function App() {
    
  const myRef = useRef<any>();

  console.log("Someting has changes")

  useEffect(()=> {
    const timerRef =     setInterval(()=> {
      myRef.current = +Math.random();
      clearInterval(timerRef)
    },1000)

    return  ()=> {
       clearInterval(timerRef)
    }
  },[myRef])

  return (
    <div>
      <h1>Use Ref</h1>
      {myRef.current}
    </div>
  )
}

export default App
