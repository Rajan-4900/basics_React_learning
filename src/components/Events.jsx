import React from 'react';

const Events = () => {
    const alertUser = () => {
        alert("this is new alert from User")
    }

    const dark = () => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    const light = () => {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    let count = 0;
     console.log("Count Befor Value = ",count);
    let counter = (value) => {
        count = value;
        alert("This Is New Alert For Count Value = "+value)
        console.log("Count After Value = ",count);
    }
  return (
    <>
    <h1>Events</h1>
    <h1>Count Value = {count}</h1>

    <div>
    <button onClick = {alertUser}>Alert Message</button>
    <br/>
    <button onClick ={dark}>Dark</button>
    <br/>
    <button onClick ={light}>light</button>
    <br/>
    <button onClick = {() => counter(20)}>Count Value</button>
    </div>
    </>
  )
}

export default Events