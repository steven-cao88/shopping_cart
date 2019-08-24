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
