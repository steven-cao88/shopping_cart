import ShoppingCart from "../src/ShoppingCart";
import Football from "../src/Football";

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
