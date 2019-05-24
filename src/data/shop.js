import _products from "./products.json";
import _discounts from "./discounts.json";

export default {
  getProducts: cp => setTimeout(() => cp(_products), 1000),
  buyProducts: cp => setTimeout(() => cp(), 1000),
  getDiscounts: cp => setTimeout(() => cp(_discounts), 1000)
};
