import React, { FormEvent, useRef, useState } from 'react'
import './App.css'



/**
 * When DOM involved to Manipulate the data
 * @returns 
 */
function UncontrolledComponent() {
  const inputRef = useRef(null); // Create a ref to hold the input DOM element

  const handleSubmit = () => {
    // Access the input value using the ref
    console.log(inputRef.current);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


/**
 * Controlled By the Parent so is called Controlled Components
 * @param param0 
 * @returns 
 */
function ControlledComponent({ value, setValue } : {
  value: string,
  setValue: (arg:string)=> void
}) {
  const handleChange = (event: FormEvent) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </form>
  );
}


function App() {

  const [getValue,setValue] = useState<string>('')

  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      <h1>Controlled And UnControlled Components</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        <UncontrolledComponent/>

        <ControlledComponent value={getValue} setValue={setValue}/>

      </div>

    </div>
  )
}

export default App
