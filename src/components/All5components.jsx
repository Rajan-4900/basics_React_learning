import React from 'react'
import "./product.css"; // it is used to import the external CSS file in react and it is used to apply the CSS styling to the component
import { useState } from 'react'; // it is function which is used to create state variable in functional component


const All5components = () => {

    // this is a product component which we can use for displaying the product details in react
    const Product = ({ name, price, color, data = {} }) => {
        // internal styling - using css classes
        // const Style = {
        //   backgroundColor: 'Yellow',
        //   color: 'Black',
        //   padding: '10px',
        //   margin: '10px',
        //   border : '1px solid red',
        //   borderRadius : '5px'
        // }

        return (
            // inline styling - style={{color : 'red', backgroundColor : 'black'}}
            <div

                // style={{
                //   backgroundColor: 'white',
                //   color: 'black',
                //   border: '1px solid yellow',
                //   margin: '10px',
                //   padding: '10px',
                //   borderRadius: '5px'
                // }}

                style={Style} // it is used to apply the internal CSS styling

                className="container" // it used to apply external CSS Styling

                className="con" // in external css which is created by new product component
            >
                <h1>Brand - {name}</h1>
                <h3>Price - {price}</h3>
                <h3>Color - {color}</h3>

                // this is used to check if the data object has the brand property then it will display the brand, cost and color of the product otherwise it will not display anything
                {data.brand && (
                    <>
                        <p>Brand - {data.brand}</p>
                        <p>Cost - {data.cost}</p>
                        <p>Color - {data.colour}</p>
                    </>
                )}
            </div>
        );
    };

    // this is a state variable to increase and decrease the counter value
    const Usestate = () => {
        // let counter = 0;

        // this is a state variable 
        const [counter, setCounter] = useState(0); // it returns an array of two elements first is state variable and second is function to update the state variable
        // setCounter ---> we can name it anything but it is a convention to name it as set + state variable name
        // 0 ---> it is the initial value of the state variable
        const increment = () => {
            // counter++;
            // console.log(counter);
            setCounter(counter + 1); // it is used to update the state variable and it takes the new value of the state variable as an argument
            // setCounter(prevState => prevState + 1); // it is used to update the state variable and it takes a function as an argument which returns the new value of the state variable
        }

        // we can also use the value to increase the initial value of the state variable
        const increase = (value) => {
            setCounter(counter + value); // it is used to update the state variable and it takes a function as an argument which returns the new value of the state variable
        }
        const decrement = () => {
            // counter--;
            // console.log(counter);
            setCounter(counter - 1); // it is used to update the state variable and it takes the new value of the state variable as an argument
            // setCounter(prevState => prevState - 1); // it is used to update the state variable and it takes a function as an argument which returns the new value of the state variable
        }

        return (
            <>
                <h1>Counter = {counter}</h1>
                <br />
                <button onClick={increment}>Increment</button>
                <button onClick={() => increase(100)}>Increase</button> // it is used to increase the counter value by 100 when the button is clicked
                <button onClick={decrement}>Decrement</button>
            </>
        )
    }

    // this is a event component which we can use for handling events in react
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
        console.log("Count Befor Value = ", count);
        let counter = (value) => {
            count = value;
            alert("This Is New Alert For Count Value = " + value)
            console.log("Count After Value = ", count);
        }
        return (
            <>
                <h1>Events</h1>
                <h1>Count Value = {count}</h1>

                <div>
                    <button onClick={alertUser}>Alert Message</button>
                    <br />
                    <button onClick={dark}>Dark</button>
                    <br />
                    <button onClick={light}>light</button>
                    <br />
                    <button onClick={() => counter(20)}>Count Value</button>
                </div>
            </>
        )
    }

    // this is the Map function 
    const Map = () => {
        // const data = ["Google", "Microsoft", "Apple", "Amazon"]
        const smartPhone = [
            { id: 1, model: "Iphone 17 pro", img : "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg", },
            { id: 2, model: "Iphone 16 pro", img : "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg", },
            { id: 3, model: "Iphone 15 pro", img : "https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg", }
        ];
        return (
            <>
            <div>
            {smartPhone.map((data) => (
                <div key={data.id}>
                    <img style={{ width: "150px" }} src={data.img} alt="" />
                    <h3>{data.model}</h3>
                </div>
            ))}
            </div>
                {/* {data.map((element, index) => (
                    <div key={index}>
                        <h1>{element}</h1>
                    </div>
                ))} */}

            </>
        )
    }

    //  this is filter function to filter the values
    const Filter = () => {
        const person = [
            { id: 1, name: "Raj", active: true },
            { id: 2, name: "Raju", active: false },
            { id: 3, name: "bot", active: true },
            { id: 4, name: "detto", active: false },
        ];

        // easy to code for this filter function
        // const active_person = person.filter(data => !data.active)
        // console.log(active_person);
        return (
            <div>
                // this is the complex code for this filter function
                {person.filter((data) => data.active).map((item) => ( // this is for diaplying in the screen for true 
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
        )
    }

}


export default All5components;
export default Product;
export default Usestate;
export default Events;
export default Map;
export default Filter;
