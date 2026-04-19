import React from 'react'

const Usestate = () => {
    let counter = 0;

    const increment = () => {
        counter++;
        console.log(counter);
    }
    const decrement = () => {
        counter--;
        console.log(counter);
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