import React from 'react'

const Product = (name,price,color) => {
  return (
    <div>
        <h1>Brand - {name}</h1>
        <h1>Price - {price}</h1>
        <h1>Color - {color}</h1>

    </div>
  )
}

export default Product