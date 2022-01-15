const cart = require('../middleware/cart');

const SALES_TAX_RATE = 0.125;

const shoppingCart = [];

it('Total Tax should return 37.50', () => {
  let result = cart.calculateTax();
});
