import ShoppingCart from "./ShoppingCart";
import Football from "./Football";
import Robotics from "./Robotics";

const shoppingCart = new ShoppingCart();
const football = new Football();
const robotics = new Robotics();

shoppingCart.add(football, 2);
shoppingCart.add(robotics, 2);
shoppingCart.addTaxRate(12.5);

console.log(shoppingCart.getFormattedTaxAmount());
console.log(shoppingCart.getFormattedTotalPrice());
