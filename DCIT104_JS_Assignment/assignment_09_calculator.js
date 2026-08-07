const readlineSync = require("readline-sync");

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
    if (b === 0) {
        return null;
    }
    return Math.round((a / b) * 100) / 100;
}

function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

function exponentiate(a, b) {
    return Math.pow(a, b);
}

function showMenu() {
    console.log();
    console.log("============================");
    console.log("      SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    while (true) {
        showMenu();
        const choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice === 7) {
            console.log("Goodbye!");
            break;
        }

        if (choice < 1 || choice > 7) {
            console.log("Invalid choice. Please enter a number between 1 and 7.");
            continue;
        }

        const a = readlineSync.questionFloat("Enter first number : ");
        const b = readlineSync.questionFloat("Enter second number: ");

        let result;
        let symbol;

        if (choice === 1) {
            result = add(a, b);
            symbol = "+";
        } else if (choice === 2) {
            result = subtract(a, b);
            symbol = "-";
        } else if (choice === 3) {
            result = multiply(a, b);
            symbol = "*";
        } else if (choice === 4) {
            result = divide(a, b);
            symbol = "/";
        } else if (choice === 5) {
            result = modulus(a, b);
            symbol = "%";
        } else if (choice === 6) {
            result = exponentiate(a, b);
            symbol = "**";
        }

        if (result === null) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log("Result: " + a + " " + symbol + " " + b + " = " + result);
        }
    }
}

main();
