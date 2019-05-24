import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import {
  getVisibleProducts,
  getVisibleProductDiscounts
} from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";

const ProductsContainer = ({ products, discounts, addToCart }) => (
  <ProductsList title="Fruits in the store">
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        discount={
          Object.keys(discounts).filter(key => key === product.id)
            ? discounts[product.id]
            : null
        }
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  discounts: PropTypes.shape({
    id: PropTypes.number,
    get: PropTypes.number,
    pay: PropTypes.number
  }),
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  discounts: getVisibleProductDiscounts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
