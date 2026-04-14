import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h1>Brand - {props.name}</h1>
        <h1>Price - {props.price}</h1>
        <h1>Color - {props.color}</h1>

    </div>
  )
}

export default Product