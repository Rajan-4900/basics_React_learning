import React from 'react';

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

      // style={Style} // it is used to apply the internal CSS styling

      className="container" // it used to apply external CSS Styling
    >
      <h1>Brand - {name}</h1>
      <h3>Price - {price}</h3>
      <h3>Color - {color}</h3>
      {/* {data.brand && (
        <>
        <p>Brand - {data.brand}</p>
        <p>Cost - {data.cost}</p>
        <p>Color - {data.colour}</p>
      </>
      )}       */}
    </div>
  );
};

export default Product;