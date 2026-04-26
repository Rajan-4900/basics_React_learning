import React, { useState } from 'react';
import { useEffect } from 'react';
// use effect hook
const UseEffect = () => {
    const [counter, setcounter] = useState(0)

    useEffect(() => {
        console.log("Use effect Is runnig")
        document.title = "Raj" // this will show the title of the tab name
    }, [])
    
  return (
    <div>
        <h1>Counter = {counter}</h1>
        <button onClick = {()=> setcounter(counter+1)}>Increase</button>
        <button onClick = {()=> setcounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default UseEffect