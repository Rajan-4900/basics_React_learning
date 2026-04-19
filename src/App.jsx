import React from 'react';
import Product from "./components/Product";
import Items from "./components/Items";
import Events from "./components/Events";
import UseState from "./components/Usestate";

const App = () => {

  const obj = {
    brand : "BMW",
    cost : 10000000,
    colour : 'white'
  }

  
  return (
    <>
    {/* <Product name="laptop 1" price={21000} color="red"  data={obj} />
    <Product name="laptop 2" price={50000} color="silver"/> */}

    {/* <Items /> */}

    {/* <Events /> */}

    <UseState />
    </>

  );
};

export default App;