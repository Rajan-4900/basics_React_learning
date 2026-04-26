import React from 'react'

const Filter = () => {
    const person = [
        { id: 1, name: "Raj", active: true },
        { id: 2, name: "Raju", active: false },
        { id: 3, name: "bot", active: true },
        { id: 4, name: "detto", active: false },
    ];

    // const active_person = person.filter(data => !data.active)
    // console.log(active_person);
    return (
        <div>
            {person.filter((data) => data.active).map((item) => ( // this is for diaplying in the screen for true 
                <div key={item.id}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Filter