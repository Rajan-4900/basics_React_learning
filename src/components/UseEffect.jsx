import React, { useState } from 'react';
import { useEffect } from 'react';
// use effect hook
const UseEffect = () => {
    const [counter, setcounter] = useState(0)

    useEffect(() => {
        console.log("Use effect Is runnig")
        // document.title = "Raj" // this will show the title of the tab name
        document.title = counter // this will make changes or changes the number in the tab title name
    }, [counter]) //dependecy array 
                  // this will work by setting the value inside the "[]" this bracket
    
  return (
    <div>
        <h1>Counter = {counter}</h1>
        <button onClick = {()=> setcounter(counter+1)}>Increase</button>
        <button onClick = {()=> setcounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default UseEffect