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
        let display = document.querySelector("#display");
        display.textContent = "";
    }

    function clearPress() {
        clear();
        firstNum = undefined;
        secondNum = undefined;
        operator = undefined;
    }

    function addToDisplay(text) {
        let display = document.querySelector("#display");
        display.textContent = display.textContent + text;
    }

    function functionPress(func) {
        let display = document.querySelector("#display");
        if (display.textContent) {
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
        let display = document.querySelector("#display");
        if (firstNum && operator) {
            if (display.textContent != "") {
                secondNum = parseInt(display.textContent);
                clear();
                let solution = operate(operator, firstNum, secondNum);
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

    // // TESTING
    // console.log("1 + 2", add(1, 2));
    // console.log("2 - 1", subtract(2, 1));
    // console.log("1 - 2", subtract(1, 2));
    // console.log("4 * 5", multiply(4, 5));
    // console.log("0.2 * 4", multiply(0.2, 4));
    // console.log("20 / 4", divide(20, 4));
    // console.log("4 / 20", divide(4, 20));
    // console.log("2 + 1", operate("add", 2, 1))
    // console.log("2 - 1", operate("subtract", 2, 1))
    // console.log("2 * 4", operate("multiply", 2, 4))
    // console.log("2 / 4", operate("divide", 2, 4))
})

