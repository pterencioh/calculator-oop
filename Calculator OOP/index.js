const {Calculator, MathOperations, Validate} = require('./js/classes');
const utils = require('./js/utils');

var num1 = utils.getValueFromUser("Enter a valid number: ");
var operation = utils.getOperationFromUser();
var num2 = utils.getValueFromUser("Enter another valid number: ");

let isInvalidDivision = (operation === "/" && num2 === 0);
if (isInvalidDivision)
    return console.log(`ERROR - You can not divide ${num1} by 0`);

var mathOperations = new MathOperations(num1,num2);
var result = mathOperations.calculate(operation);

if(!result)
    return "ERROR - It was not possible to calculate!";

console.clear();
console.log(num1, operation, num2, "=", result);



