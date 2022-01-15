const store = [
  {
    itemName: 'Shower Gel',
    unitPrice: 49.99,
  },
  {
    itemName: 'Deodrant',
    unitPrice: 99.99,
  },
];

const shoppingCart = [];

const addItem = (item, quantity) => {
  const cartItem = { ...item, quantity: quantity };
  shoppingCart.push(cartItem);
};

const calculateTax = (item, taxRate) => {
  return item.unitPrice * item.quantity * taxRate;
};

const calculateTotal = (cartItems) => {
  var total = 0;
  cartItems.forEach((item) => {
    total += item.unitPrice * item.quantity;
  });

  var totalTax =
    calculateTax(cartItems[0], SALES_TAX_RATE) +
    calculateTax(cartItems[1], SALES_TAX_RATE);
  return total + totalTax;
};

module.exports = {
  calculateTax,
  calculateTotal,
};
