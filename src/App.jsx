import React from 'react';
import Product from "./components/Product";

const App = () => {

  const obj = {
    name : "BMR",
    price : 10000000,
    color : 'white'
  }

  return (
    <>
    <Product name="laptop 1" price={21000} color="red"  data= {obj} />
    <Product name="laptop 2" price={50000} color="silver" />
    </>
  );
};

export default App;