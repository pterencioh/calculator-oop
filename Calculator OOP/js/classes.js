/* I'm not going to use ECMAScript 2022 private concepts in this project */
class Calculator {
    constructor(num1, num2) {
        this._num1 = Number(num1);
        this._num2 = Number(num2);
    }
}

class MathOperations extends Calculator {
    add() {
        return this._num1 + this._num2;
    }

    subtract() {
        return this._num1 - this._num2;
    }

    divide() {
        return this._num1 / this._num2;
    }

    multiply() {
        return this._num1 * this._num2;
    }

    calculate(operator) {
        switch(operator){
            case "+":
                return this.add();
            case "-":
                return this.subtract();
            case "/":
                return this.divide();
            case "*":
                return this.multiply();
            default:
                return false;
        }
    }
}

class Validate {
    constructor(value){
        this.value = value;
        this._operations = ["+","-","*","/"];
    }

    isValidNumber(){
        const regexNumbersOrDecimals = /^-?[0-9]+(\.[0-9]+)?$/;
        let isValid = regexNumbersOrDecimals.test(this.value);

        return isValid;
    }

    isValidOperator(){
        let isLengthEqualOne = (this.value.length == "1");
        if (!isLengthEqualOne)
            return false;

        let isValid = this._operations.includes(this.value);
        return isValid        
    }
}

module.exports = {Calculator, MathOperations, Validate};