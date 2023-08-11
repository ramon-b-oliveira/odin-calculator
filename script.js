function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    if (operator === "+") {
        alert(add(firstNum, secondNum));
    }
    if (operator === "-") {
        alert(subtract(firstNum, secondNum));
    }
    if (operator === "*") {
        alert(multiply(firstNum, secondNum));
    }
    if (operator === "/") {
        alert(divide(firstNum, secondNum));
    }
}

let firstNum = ""
let operator = ""
let secondNum = ""