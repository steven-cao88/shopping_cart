import ShoppingCart from "../src/ShoppingCart";
import Football from "../src/Football";
import Robotics from "../src/Robotics";

test("Add products to the shopping cart", () => {
  const shoppingCart = new ShoppingCart();
  const football = new Football();

  shoppingCart.add(football, 5);

  const addedItem = shoppingCart.getItem(football);

  expect(addedItem.product).toEqual(football);
  expect(addedItem.quantity).toBe(5);
  expect(shoppingCart.getFormattedTotalPrice()).toBe("199.95");
});

test("Add additional products of the same type to the shopping cart", () => {
  const shoppingCart = new ShoppingCart();
  const football = new Football();

  shoppingCart.add(football, 5);
  shoppingCart.add(football, 3);

  const addedItem = shoppingCart.getItem(football);

  expect(addedItem.product).toEqual(football);
  expect(addedItem.quantity).toBe(8);
  expect(shoppingCart.getFormattedTotalPrice()).toBe("319.92");
});

test("Calculate the tax rate of the shopping cart with multiple items", () => {
  const shoppingCart = new ShoppingCart();
  const football = new Football();
  const robotics = new Robotics();

  shoppingCart.add(football, 2);
  shoppingCart.add(robotics, 2);
  shoppingCart.addTaxRate(12.5);

  const addedFootballItem = shoppingCart.getItem(football);
  const addedRoboticsItem = shoppingCart.getItem(robotics);

  expect(addedFootballItem.product).toEqual(football);
  expect(addedFootballItem.quantity).toBe(2);
  expect(addedRoboticsItem.product).toEqual(robotics);
  expect(addedRoboticsItem.quantity).toBe(2);
  expect(shoppingCart.getFormattedTaxAmount()).toBe("35.00");
  expect(shoppingCart.getFormattedTotalPrice()).toBe("314.96");
});
