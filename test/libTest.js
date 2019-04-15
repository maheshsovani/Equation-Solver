const assert = require("assert");
const {solveLinearEquation} = require("../src/library.js");

describe("solve Linear Equation",function(){
  it("with monomial on both sides",function(){
    assert.equal(solveLinearEquation("2x = 3"),1.5);
  });
});
