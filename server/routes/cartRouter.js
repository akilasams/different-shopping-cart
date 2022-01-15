const express = require('express');

const router = express.Router();

const SALES_TAX_RATE = 0.125;

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

router.use('/add-item', (req, res) => {
  //   const { item, quantity, unitPrice } = req.body;
  const cartItem = req.body;
  shoppingCart.push(cartItem);
  res.send();
});

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

module.exports = router;
