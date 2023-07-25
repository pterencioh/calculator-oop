const prompt = require('prompt-sync')({ sigint: true });
const {Calculator, MathOperations, Validate} = require('./classes');

const getValueFromUser = (promptMessage) => {
    console.clear(); 
    const input = prompt(promptMessage);   
    var isValid = new Validate(input).isValidNumber();

    return isValid ? Number(input) : getValueFromUser(promptMessage);
}

const getOperationFromUser = () => {
    console.clear();
    const promptMessage = createOperationMessage();    
    const input = prompt(promptMessage);
    let isValid = new Validate(input).isValidOperator();

    return isValid ? input : getOperationFromUser();
}

const createOperationMessage = () => {
    /* The 'prompt-sync' library has a particular issue where, if your prompt text is too long, it repeats the entire text when we enter a value. 
       To address this problem, I opted to first display the instructions using 'console.log' and then request user input. */
    let listOperations = "Please enter a operation:\n";
    listOperations += "+   Sum\n";
    listOperations += "-   Subtraction\n";
    listOperations += "/   Division\n";
    listOperations += "*   Multiplication";

    console.log(listOperations);

    return "Answer: ";
}


module.exports = {getValueFromUser, getOperationFromUser, createOperationMessage};