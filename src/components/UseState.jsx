import React from 'react'
import { useState } from 'react'; // it is function which is used to create state variable in functional component

const Usestate = () => {
    // let counter = 0;

    // this is a state variable 
    const [counter, setCounter] = useState(0); // it returns an array of two elements first is state variable and second is function to update the state variable

    const increment = () => {
        // counter++;
        // console.log(counter);
        setCounter(counter + 1); // it is used to update the state variable and it takes the new value of the state variable as an argument
    }
    const decrement = () => {
        // counter--;
        // console.log(counter);
        setCounter(counter - 1); // it is used to update the state variable and it takes the new value of the state variable as an argument
    }

  return (
    <>
    <h1>Counter = {counter}</h1>
    <br/>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default Usestate