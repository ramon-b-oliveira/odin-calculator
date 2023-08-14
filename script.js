const calculating = document.querySelector(".calculating");
const current = document.querySelector(".current");
const numBtns = document.querySelectorAll(".btn")
let firstNum = "";
let operator = "";
let secondNum = "";

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", btnPressing);
}

function btnPressing() {
    if (this.hasAttribute("data-number")) {
        if (operator === "") {
            firstNum += this.innerHTML
            current.innerHTML = firstNum
        } else {
            secondNum += this.innerHTML
            current.innerHTML = secondNum
        }

    }
    if (this.hasAttribute("data-operator")) {
        if (secondNum !== "") {
            firstNum = operate(firstNum, secondNum, operator)
        }
        if (firstNum === "") {
            return;
        } else {
            operator = this.innerHTML
            calculating.innerHTML = `${firstNum}${this.innerHTML} `
            secondNum = ""
        }
    }
    if (this.hasAttribute("data-clear")) {
        firstNum = "";
        operator = "";
        secondNum = "";
        calculating.innerHTML = ""
        current.innerHTML = "0"
    }
    if (this.hasAttribute("data-equals")) {
        if (operator === "/" && secondNum === "0") {
            firstNum = "";
            operator = "";
            secondNum = "";
            calculating.innerHTML = ""
            current.innerHTML = "0"
            alert("You can't divide by 0")
        } 
        if (secondNum === "") {
            return;
        } else {
            let temp = 0
            calculating.innerHTML = `${firstNum}${operator}${secondNum}=`
            temp = operate(firstNum, secondNum, operator)
            current.innerHTML = temp
            secondNum = ""
            firstNum = temp
        }
    }
}

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
    let result = a / b
    if (result !== 0) {
        return result.toFixed(3)
    }
    return result
}

function operate(firstNum, secondNum, operator) {
    if (operator === "+") {
        return add(parseFloat(firstNum), parseFloat(secondNum));
    }
    if (operator === "-") {
        return subtract(parseFloat(firstNum), parseFloat(secondNum));
    }
    if (operator === "*") {
        return multiply(parseFloat(firstNum), parseFloat(secondNum));
    }
    if (operator === "/") {
        return divide(parseFloat(firstNum), parseFloat(secondNum));
    }
}