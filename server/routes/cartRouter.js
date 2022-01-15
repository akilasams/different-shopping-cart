const express = require('express');

const router = express.Router();

router.use('/add-item', (req, res) => {
  //   const { item, quantity, unitPrice } = req.body;
  const cartItem = req.body;
  shoppingCart.push(cartItem);
  res.send();
});

module.exports = router;
