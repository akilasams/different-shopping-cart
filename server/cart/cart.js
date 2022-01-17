const findItem = (shop, itemId) => {
  const item = shop.find((item) => item.itemId === itemId);
  return item;
};

const addItem = (shop, cart, itemId, quantity) => {
  const itemInShop = findItem(shop, itemId);
  const itemInCart = findItem(cart, itemId);

  if (itemInShop != null) {
    if (itemInCart == null) {
      if (quantity <= itemInShop.quantity) {
        const cartItem = {
          itemId: itemInShop.itemId,
          itemName: itemInShop.itemName,
          unitPrice: itemInShop.unitPrice,
          quantity: quantity,
        };
        updateQuantity(shop, itemId, -quantity);
        cart.push(cartItem);
      } else throw new Error('Not enough stock available');
    } else {
      updateQuantity(shop, itemId, -quantity);
      updateQuantity(cart, itemId, quantity);
    }
  } else throw new Error('No Such Item available in the Shop');
};

const updateQuantity = (dataArray, itemId, quantity) => {
  for (var i in dataArray) {
    if (dataArray[i].itemId === itemId) {
      dataArray[i].quantity += quantity;
      break;
    } else continue;
  }
};

const availableQuantity = (dataArray, itemId) => {
  for (var i in dataArray) {
    if (dataArray[i].itemId === itemId) {
      return dataArray[i].quantity;
    } else continue;
  }
};

const resetStock = (shop) => {
  for (i in shop) {
    shop[i].quantity = 50;
  }
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

  if (cart.length !== 0) {
    cart.forEach((item) => {
      totalWithTax +=
        item.unitPrice * item.quantity +
        item.unitPrice * item.quantity * taxRate;
    });
  } else {
  }

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
  updateQuantity,
  availableQuantity,
  resetStock,
  calculateTotal,
  calculateTotalTax,
  calculateTotalWithTax,
  roundNum,
};
