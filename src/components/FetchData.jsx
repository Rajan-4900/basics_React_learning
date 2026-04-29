import React, { useEffect, useState } from 'react'

// data fetching using UseEffect , we can't use except this for data fetching.
const FetchData = () => {
    const [Api_data, setapi_data] = useState([]) //this is the useState function snippet  to call
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos") // this is used to link the api
            const data = await api.json(); // this is convertion of the api to json
            console.log("My Data =", data);
            setapi_data(data)
        } // this is a useEffect to fetch the data from api
        fetchData() // this is a function call from the use effect to display
    }, [])

    return (
        // it will shows the all title from the api {items.title}
              // this is map function used to map the data
        <div>
            {Api_data.map((items) => (
                <div key={items.id}> 
                    <h2>{items.title}</h2> 
                </div>
            ))}
        </div>
    )
}

export default FetchData;