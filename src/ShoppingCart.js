export default class ShoppingCart {
  constructor() {
    this.items = [];
  }

  add(product, quantity) {
    if (this.contains(product)) {
      this.addQuantity(product, quantity);
    } else {
      this.addItem(product, quantity);
    }
  }

  getItem(product) {
    return this.items.find(
      item =>
        item.product.type === product.type &&
        item.product.unit_price === product.unit_price
    );
  }

  contains(product) {
    return !!this.getItem(product);
  }

  addItem(product, quantity) {
    const item = {
      product,
      quantity
    };

    this.items.push(item);
  }

  addQuantity(product, quantity) {
    const item = this.getItem(product);
    item.quantity += quantity;
  }

  getTotalPrice() {
    const reducer = (total, item) =>
      total + item.quantity * item.product.unitPrice;

    return this.items.reduce(reducer, 0);
  }

  getFormattedTotalPrice() {
    return this.formatNumber(this.getTotalPrice());
  }

  formatNumber(price) {
    return parseFloat(Math.ceil(price * 100) / 100).toFixed(2);
  }
}
