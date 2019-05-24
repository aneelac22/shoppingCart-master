import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from "../actions";
import {
  getTotalBeforeDiscount,
  getDiscount,
  getTotalAfterDiscount,
  getCartProducts,
  getCartDiscounts
} from "../reducers";
import Cart from "../components/Cart";

const CartHolder = ({
  products,
  totalBeforeDiscount,
  discount,
  discounts,
  totalAfterDiscount,
  checkout
}) => (
  <Cart
    products={products}
    totalBeforeDiscount={totalBeforeDiscount}
    discounts={discounts}
    discount={discount}
    totalAfterDiscount={totalAfterDiscount}
    onCheckoutClicked={() => checkout(products)}
  />
);

CartHolder.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  totalAfterDiscount: PropTypes.string,
  discount: PropTypes.string,
  totalBeforeDiscount: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  totalBeforeDiscount: getTotalBeforeDiscount(state),
  discounts: getCartDiscounts(state),
  discount: getDiscount(state),
  totalAfterDiscount: getTotalAfterDiscount(state)
});

export default connect(
  mapStateToProps,
  { checkout }
)(CartHolder);
