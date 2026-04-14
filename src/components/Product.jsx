import React from 'react'

const Product = ({name,price,color, data={}}) => {
  return (
    <div>
        <h1>Brand - {name}</h1>
        <h3>Price - {price}</h3>
        <h3>Color - {color}</h3>

        <h3>Name - {data.name}</h3>
        <h3>Price - {data.price}</h3>
        <h3>Color - {data.color}</h3>


    </div>
  )
}

export default Product