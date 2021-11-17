import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductItem = ({ product, discount, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      className="mt-2"
      title={product.title}
      price={product.price}
      discount={discount}
    />
    <button
      className="btn btn-primary my-2"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  discount: PropTypes.shape({
    id: PropTypes.number,
    get: PropTypes.number,
    pay: PropTypes.number,
  }),
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
