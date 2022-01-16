const findItem = (shop, itemId) => {
  const item = shop.find((item) => item.itemId === itemId);
  return item;
};

const addItem = (shop, cart, itemId, quantity) => {
  const itemInShop = findItem(shop, itemId);
  const itemInCart = findItem(cart, itemId);

  if (itemInCart == null) {
    const cartItem = { ...itemInShop, quantity: quantity };
    cart.push(cartItem);
  } else {
    for (var i in cart) {
      if (cart[i].itemId === itemId) {
        cart[i].quantity += quantity;
        break;
      } else continue;
    }
  }
};

const quantityInCart = (cart) => {
  var totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
};

const calculateTotalTax = (cart, taxRate) => {
  var totalTax = 0;
  cart.forEach((item) => {
    totalTax += item.unitPrice * item.quantity * taxRate;
  });
  var result = roundNum(totalTax, 2);
  return result;
};

const calculateTotal = (cart) => {
  var total = 0;
  cart.forEach((item) => {
    total += item.unitPrice * item.quantity;
  });
  var result = roundNum(total, 2);
  return result;
};

const calculateTotalWithTax = (cart, taxRate) => {
  var totalWithTax = 0;
  cart.forEach((item) => {
    totalWithTax +=
      item.unitPrice * item.quantity + item.unitPrice * item.quantity * taxRate;
  });
  var result = roundNum(totalWithTax, 2);
  return result;
};

function roundNum(num, length) {
  var multiplicator = Math.pow(10, length);
  num = parseFloat((num * multiplicator).toFixed(11));
  number = Math.round(num) / multiplicator;
  return number;
}

module.exports = {
  findItem,
  addItem,
  quantityInCart,
  calculateTotal,
  calculateTotalTax,
  calculateTotalWithTax,
  roundNum,
};
