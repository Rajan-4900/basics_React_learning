import React from 'react';
import { useEffect } from 'react';
// use effect hook
const UseEffect = () => {

    useEffect(() => {
        console.log("Use effect Is runnig")
        document.title = "Raj" // this will show the title of the tab name
    }, [])
    
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect