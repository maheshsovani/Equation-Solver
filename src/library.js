const { sum,subtract,multiply,divide,reduceBySum} = require("./equationUtil.js")

const splitArray =  function(equation){
  console.log(equation);
  let equationSides = equation.split("=");
  let sides = {lhs:equationSides[0].split(" "),rhs:equationSides[1].split(" ").slice(1)};
  return sides;
}

const multiplyOrDivide = function(symbol,num1,num2){
  let operation = {"*": multiply, "/":divide};
  return operation[symbol](num1,num2);
}

const classifyData = function(dataSet){
  let variable = {"+":[],"-":[]};
  let result = {"+":[],"-":[]};
  let primaryOperator = ["+","-"];
  let secondaryOperator = ["*","/"];

  for(let index = 0;index< dataSet.length ; index++){
    let hasVariable = dataSet[index].match(/[A-z]/g);
    if(hasVariable){ 
      variable[dataSet[index-1]||"+"].push(parseInt(dataSet[index])||1);
    }

    if(secondaryOperator.includes(dataSet[index])){
      let output = multiplyOrDivide(dataSet[index],+dataSet[index-1],+dataSet[index+1]);
      result[dataSet[index-2]||"+"].push(output);
    }

    if(primaryOperator.includes(dataSet[index]) && !secondaryOperator.includes(dataSet[index+2])){
      result[dataSet[index]].push(+dataSet[index+1] || 0);
    }
    if(dataSet[index-1] == undefined && +dataSet[index] ) {
      secondaryOperator.includes(dataSet[index+1])||result["+"].push(+dataSet[index]);
    }
  }
  return {numeric:result, variable:variable};
}


const arrangeData = function(equation){
  let sides = splitArray(equation);
  let leftSideData = sides.lhs;
  let rightSideData = sides.rhs;
  let data ={};
  data["lhs"] = classifyData(leftSideData);
  data["rhs"] = classifyData(rightSideData);
  return data;
}

const solveLinearEquation = function(equation){
  let classifiedData = arrangeData(equation);
  let lhsAnswer = reduceBySum(classifiedData.lhs.numeric);
  let rhsAnswer = reduceBySum(classifiedData.rhs.numeric);
  let leftVarAnswer = reduceBySum(classifiedData.lhs.variable);
  let rightVarAnswer = reduceBySum(classifiedData.rhs.variable);
  let leftSideResult = subtract(leftVarAnswer,rightVarAnswer);
  let rightSideResult = subtract(rhsAnswer,lhsAnswer);
  return rightSideResult/leftSideResult;
}
console.log(solveLinearEquation(process.argv[2]));
module.exports = { solveLinearEquation };
