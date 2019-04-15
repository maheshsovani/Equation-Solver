const sum = function(firstNum,secondNum){
  return firstNum + secondNum;
} 

const subtract = function(firstNum,secondNum){
  return firstNum - secondNum;
} 

const multiply = function(firstNum,secondNum){
  return firstNum * secondNum;
} 

const divide = function(firstNum,secondNum){
  return firstNum / secondNum;
} 

const reduceBySum = function(dataSet){
  let firstNum = dataSet["+"].reduce(sum,0);
  let secondNum = dataSet["-"].reduce(sum,0);
  return firstNum - secondNum;
}

module.exports = {sum,subtract,multiply,divide,reduceBySum};
