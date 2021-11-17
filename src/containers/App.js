import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartHolder from "./CartHolder";

const App = () => (
  <div className="col-12">
    <h1 className="text-center mt-3">Fruit Shopping Cart</h1>
    <div className="d-flex mt-4">
      <ProductsContainer />
      <CartHolder />
    </div>
  </div>
);

export default App;
