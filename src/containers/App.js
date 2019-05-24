import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartHolder from "./CartHolder";

const style = {
  width: "75%"
};
const App = () => (
  <div>
    <h1>Fruit Shopping Cart</h1>
    <table />
    <th style={style}>
      <ProductsContainer />
    </th>
    <th style={style}>
      <CartHolder />
    </th>
  </div>
);

export default App;
