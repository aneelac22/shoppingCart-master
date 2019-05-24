import shop from "../data/shop";
import * as types from "../constants/ActionTypes";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

const receiveDiscounts = discounts => ({
  type: types.RECEIVE_DISCOUNTS,
  discounts: discounts
});

export const getAllDiscounts = () => dispatch => {
  shop.getDiscounts(discounts => {
    dispatch(receiveDiscounts(discounts));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

const addDiscountToCart = discount => ({
  type: types.ADD_DISCOUNT_TO_CART,
  discount
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
  const discountInCart = getState().cart.discountById.filter(function(obj) {
    return obj.id === productId;
  })[0];
  if (getState().products.discountById[productId] && !discountInCart) {
    dispatch(addDiscountToCart(getState().products.discountById[productId]));
  }
};

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    });
  });
};
