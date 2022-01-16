const expect = require('chai').expect;

const cart = require('../cart/cart');

const shop = [
  {
    itemId: 1,
    itemName: 'Shower Gel',
    unitPrice: 49.99,
  },
  {
    itemId: 2,
    itemName: 'Deodrant',
    unitPrice: 99.99,
  },
];

const SALES_TAX_RATE = 0.125;

let shoppingCart = [];

describe('Cart Functionality', () => {
  it('Item should should not return a null', () => {
    let result = cart.findItem(shop, 001);
    expect(result).to.not.be.null;
  });
});

//==================================================================

describe('1) Scenario 1', () => {
  it('Have an empty shopping cart', () => {
    shoppingCart = [];
    expect(shoppingCart.length).to.equal(0);
  });

  it('Add 5 shower gels to cart should return quantity of 5 in the cart', () => {
    cart.addItem(shop, shoppingCart, 1, 5);
    expect(cart.quantityInCart(shoppingCart)).to.equal(5);
  });

  it('Total of the items in cart should return 249.95', () => {
    expect(cart.calculateTotal(shoppingCart)).to.equal(249.95);
  });
});

describe('2) Scenario 2', () => {
  it('Have an empty shopping cart', () => {
    shoppingCart = [];
    expect(shoppingCart.length).to.equal(0);
  });

  it('Adding 5 shower gels to cart should return quantity of 5 in the cart', () => {
    cart.addItem(shop, shoppingCart, 1, 5);
    expect(cart.quantityInCart(shoppingCart)).to.equal(5);
  });

  it('Adding 3 more shower gels to cart should return quantity of 8 in the cart', () => {
    cart.addItem(shop, shoppingCart, 1, 3);
    expect(cart.quantityInCart(shoppingCart)).to.equal(8);
  });

  it('Total of the items in cart should return 399.92', () => {
    expect(cart.calculateTotal(shoppingCart)).to.equal(399.92);
  });
});

describe('3) Scenario 3', () => {
  it('Have an empty shopping cart', () => {
    shoppingCart = [];
    expect(shoppingCart.length).to.equal(0);
  });

  it('Adding 2 shower gels to cart should return quantity of 2 in the cart', () => {
    cart.addItem(shop, shoppingCart, 1, 2);
    expect(cart.quantityInCart(shoppingCart)).to.equal(2);
  });

  it('Adding 2 deodrants to cart should return quantity of 4 in the cart', () => {
    cart.addItem(shop, shoppingCart, 2, 2);
    expect(cart.quantityInCart(shoppingCart)).to.equal(4);
  });

  it('Total of tex for the items in cart should return 37.50', () => {
    expect(cart.calculateTotalTax(shoppingCart, SALES_TAX_RATE)).to.equal(37.5);
  });

  it('Total of the items in cart should return 337.46', () => {
    expect(cart.calculateTotalWithTax(shoppingCart, SALES_TAX_RATE)).to.equal(
      337.46
    );
  });
});
