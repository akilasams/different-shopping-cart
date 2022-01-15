const assert = require('chai').assert;

const app = require('../app');

describe('App', function () {
  describe('sayHello()', function () {
    it('sayHello should return hello', function () {
      let result = app.sayHello();
      assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function () {
      let result = app.sayHello();
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers()', function () {
    it('addNumber should be above 5', function () {
      let result = app.addNumbers(2, 4);
      assert.isAbove(result, 5);
    });

    it('addNumber should return type number', function () {
      let result = app.addNumbers(2, 1);
      assert.typeOf(result, 'number');
    });
  });
});
