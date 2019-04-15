const assert = require('assert');
const {sum, subtract, multiply, divide, reduceBySum} = require('../src/equationUtil.js');

describe("sum", function() {
  it("it should return the sum of two numbers", function() {
    assert.equal(sum(1,1),2);
    assert.equal(sum(1,0),1);
    assert.equal(sum(1,3),4);
    assert.equal(sum(4,3),7);
  });
});

describe("subtract", function() {
  it("it should return the subtraction of two numbers", function() {
    assert.equal(subtract(1,1),0);
    assert.equal(subtract(1,0),1);
    assert.equal(subtract(1,3),-2);
    assert.equal(subtract(4,3),1);
  });
});

describe("multiply", function() {
  it("it should return the multiplification of two numbers", function() {
    assert.equal(multiply(1,1),1);
    assert.equal(multiply(1,0),0);
    assert.equal(multiply(1,3),3);
    assert.equal(multiply(4,3),12);
  });
});

describe("divide", function() {
  it("it should return the division of two numbers", function() {
    assert.equal(divide(1,1),1);
    assert.equal(divide(1,0),Infinity);
    assert.equal(divide(1,2),0.5);
    assert.equal(divide(25,5),5);
  });
});

describe("reduceBySum", function() {
  it("it should take a object with keys + and - holding list of numbers and reduces the list of numbers", function(){
    assert.equal(reduceBySum({"+":[1,2,3],"-":[2,3]}),1);
    assert.equal(reduceBySum({"+":[],"-":[2,3]}),-5);
    assert.equal(reduceBySum({"+":[1],"-":[2,3]}),-4);
    assert.equal(reduceBySum({"+":[1,2,3],"-":[]}),6);
    assert.equal(reduceBySum({"+":[1,2,3],"-":[6]}),0);
  });
});
