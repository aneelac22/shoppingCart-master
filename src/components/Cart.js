import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import Discount from "./Discount";

const Cart = ({
  products,
  totalBeforeDiscount,
  discounts,
  discount,
  totalAfterDiscount,
  onCheckoutClicked
}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some fruits to cart.</em>
  );

  const hasDiscounts = discounts.length > 0;
  const discountNodes = hasDiscounts ? (
    discounts.map(discount => (
      <Discount
        title={discount.title}
        value={discount.value}
        key={discount.id}
      />
    ))
  ) : (
    <em>No selection eligible for discount.</em>
  );

  return (
    <div className="col-3">
      <h3>Your shopping cart</h3>
      <div>{nodes}</div>
      <p>
        <b>Sub Total: {totalBeforeDiscount}</b>
      </p>
      {hasDiscounts ? <em>Discounts</em> : null}
      <div>{discountNodes}</div>
      {hasDiscounts ? (
        <p>
          <b>Discounts total value: {discount}</b>
        </p>
      ) : null}
      <p>
        <b>Total payable: {totalAfterDiscount}</b>
      </p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  totalBeforeDiscount: PropTypes.string,
  discounts: PropTypes.array,
  discount: PropTypes.string,
  totalAfterDiscount: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
