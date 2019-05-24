import { combineReducers } from "redux";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";

export default combineReducers({
  cart,
  products
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
const getQuantityAfterDiscount = (state, id) =>
  fromCart.getQuantityAfterDiscount(state.cart, id);

export const getProductDiscount = (state, id) =>
  fromProducts.getProductDiscount(state.products, id);

export const getTotalBeforeDiscount = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getTotalAfterDiscount = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total +
        getProduct(state, id).price * getQuantityAfterDiscount(state, id),
      0
    )
    .toFixed(2);

export const getDiscount = state =>
  (getTotalBeforeDiscount(state) - getTotalAfterDiscount(state)).toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));

export const getCartDiscounts = state =>
  state.cart.discountById
    .filter(obj => Math.trunc(getQuantity(state, obj.id) / obj.get) !== 0)
    .map(obj => ({
      ...getProduct(state, obj.id),
      value: (
        getProduct(state, obj.id).price *
        Math.trunc(getQuantity(state, obj.id) / obj.get)
      ).toFixed(2)
    }));
