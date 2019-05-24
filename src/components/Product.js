import React from "react";
import PropTypes from "prop-types";

const Product = ({ price, quantity, title, discount }) => (
  <div>
    {title} - {price}
    {quantity ? ` x ${quantity}` : null}
    {discount
      ? ` - discount: buy ${discount.get}, pay for ${discount.pay}`
      : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  discount: PropTypes.object
};

export default Product;
