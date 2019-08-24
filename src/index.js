import ShoppingCart from "./ShoppingCart";
import Football from "./Football";

const shoppingCart = new ShoppingCart();
const football = new Football();

shoppingCart.add(football, 2);

console.log(shoppingCart.getFormattedTotalPrice());
