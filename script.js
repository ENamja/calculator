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
        case "add":
            result = add(a,b);
            break;
        case "subtract":
            result = subtract(a,b);
            break;
        case "multiply":
            result = multiply(a,b);
            break;
        case "divide":
            result = divide(a,b);
            break;
        default:
            result = undefined;
            break;
    }
    return result;
}

console.log("1 + 2", add(1, 2));
console.log("2 - 1", subtract(2, 1));
console.log("1 - 2", subtract(1, 2));
console.log("4 * 5", multiply(4, 5));
console.log("0.2 * 4", multiply(0.2, 4));
console.log("20 / 4", divide(20, 4));
console.log("4 / 20", divide(4, 20));
console.log("2 + 1", operate("add", 2, 1))
console.log("2 - 1", operate("subtract", 2, 1))
console.log("2 * 4", operate("multiply", 2, 4))
console.log("2 / 4", operate("divide", 2, 4))