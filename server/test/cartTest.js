const expect = require('chai').expect;

const cart = require('../cart/cart');

const shop = [
  {
    itemId: 1,
    itemName: 'Shower Gel',
    unitPrice: 49.99,
    quantity: 50,
  },
  {
    itemId: 2,
    itemName: 'Deodrant',
    unitPrice: 99.99,
    quantity: 50,
  },
];

const SALES_TAX_RATE = 0.125;

let shoppingCart = [];

describe('Test to Round Numbers', () => {
  it('0.475 should return 0.48', () => {
    expect(cart.roundNum(0.475, 2)).to.equal(0.48);
  });

  it('0.4749 should return 0.47', () => {
    expect(cart.roundNum(0.4749, 2)).to.equal(0.47);
  });
});

describe('1) Step 1: Add products to the shopping cart.', () => {
  it('Have an empty shopping cart', () => {
    cart.resetStock(shop);
    shoppingCart = [];
    expect(shoppingCart.length).to.equal(0);
  });

  it('Adding 5 shower gels to cart should return a quantity of 5 in the cart and 45 in stock', () => {
    cart.addItem(shop, shoppingCart, 1, 5);
    expect(cart.availableQuantity(shoppingCart, 1)).to.equal(5);
    expect(cart.availableQuantity(shop, 1)).to.equal(45);
  });

  it('Total of the items in cart should return 249.95', () => {
    expect(cart.calculateTotal(shoppingCart)).to.equal(249.95);
  });
});

describe('2) Step 2: Add additional products of the same type to the shopping cart.', () => {
  it('Have an empty shopping cart', () => {
    cart.resetStock(shop);
    shoppingCart = [];
    expect(shoppingCart.length).to.equal(0);
  });

  it('Adding 5 shower gels to cart should return quantity of 5 in the cart and 45 in stock', () => {
    cart.addItem(shop, shoppingCart, 1, 5);
    expect(cart.availableQuantity(shoppingCart, 1)).to.equal(5);
    expect(cart.availableQuantity(shop, 1)).to.equal(45);
  });

  it('Adding 3 more shower gels to cart should return quantity of 8 in the cart and 42 in stock', () => {
    cart.addItem(shop, shoppingCart, 1, 3);
    expect(cart.availableQuantity(shoppingCart, 1)).to.equal(8);
    expect(cart.availableQuantity(shop, 1)).to.equal(42);
  });

  it('Total of the items in cart should return 399.92', () => {
    expect(cart.calculateTotal(shoppingCart)).to.equal(399.92);
  });
});

describe('3) Step 3: Calculate the tax rate of the shopping cart with multiple items.', () => {
  it('Have an empty shopping cart', () => {
    cart.resetStock(shop);
    shoppingCart = [];
    expect(shoppingCart.length).to.equal(0);
  });

  it('Adding 2 shower gels to cart should return quantity of 2 in the cart and 48 shower gels in the stock', () => {
    cart.addItem(shop, shoppingCart, 1, 2);
    expect(cart.availableQuantity(shoppingCart, 1)).to.equal(2);
    expect(cart.availableQuantity(shop, 1)).to.equal(48);
  });

  it('Adding 2 deodrants to cart should return quantity of 4 in the cart and 48 deodrants in the stock', () => {
    cart.addItem(shop, shoppingCart, 2, 2);
    let totalQuantityinCart =
      cart.availableQuantity(shoppingCart, 1) +
      cart.availableQuantity(shoppingCart, 2);
    expect(totalQuantityinCart).to.equal(4);
    expect(cart.availableQuantity(shop, 2)).to.equal(48);
  });

  it('Total of tax for the items in cart should return 37.50', () => {
    expect(cart.calculateTotalTax(shoppingCart, SALES_TAX_RATE)).to.equal(37.5);
  });

  it('Total of the items in cart should return 337.46', () => {
    expect(cart.calculateTotalWithTax(shoppingCart, SALES_TAX_RATE)).to.equal(
      337.46
    );
  });
});
