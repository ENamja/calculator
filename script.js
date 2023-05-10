document.addEventListener("DOMContentLoaded", () => {
    let firstNum = undefined;
    let operator = undefined;
    let secondNum = undefined;

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

    function operate(operation, a, b) {
        let result;
        switch(operation) {
            case "+":
                result = add(a,b);
                break;
            case "-":
                result = subtract(a,b);
                break;
            case "*":
                result = multiply(a,b);
                break;
            case "/":
                result = divide(a,b);
                break;
            default:
                result = undefined;
                break;
        }
        return result;
    }

    function clear() {
        let p = document.querySelector("#display p");
        p.textContent = "";
    }

    function clearPress() {
        clear();
        firstNum = undefined;
        secondNum = undefined;
        operator = undefined;
    }

    function addToDisplay(text) {
        let p = document.querySelector("#display p");
        p.textContent = p.textContent + text;
    }

    function functionPress(func) {
        let p = document.querySelector("#display p");
        if (p.textContent) {
            if (!operator) {
                operator = func;
                firstNum = parseInt(display.textContent);
                clear();
            }
            else {
                secondNum = parseInt(display.textContent);
                firstNum = operate(operator, firstNum, secondNum);
                operator = func;
                secondNum = undefined;
                clear();
            }
        }
    }

    function equalPress() {
        let p = document.querySelector("#display p");
        if (firstNum && operator) {
            if (p.textContent != "") {
                secondNum = parseInt(display.textContent);
                let solution = operate(operator, firstNum, secondNum);
                clear();
                operator = undefined;
                secondNum = undefined;
                firstNum = solution;
                addToDisplay(solution);
            }
            
        }
    }

    document.querySelector("#clear").addEventListener("click", (e) => {
        clearPress();
    })

    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            addToDisplay(e.target.textContent);
        });
    })

    const funcs = document.querySelectorAll(".function");
    funcs.forEach((func) => {
        func.addEventListener("click", (e) => {
            functionPress(func.textContent);
        });
    })

    document.querySelector("#equal").addEventListener("click", (e) => {
        equalPress();
    })
})

