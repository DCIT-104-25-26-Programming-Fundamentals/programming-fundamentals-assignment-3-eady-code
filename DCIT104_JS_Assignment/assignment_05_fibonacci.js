const readlineSync = require("readline-sync");

function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    let a = 0;
    let b = 1;
    let sequence = "";

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence = sequence + a;
        } else {
            sequence = sequence + " " + a;
        }
        let next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + sequence);
}

function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    while (a < number) {
        let next = a + b;
        a = b;
        b = next;
    }

    return a === number;
}

function main() {
    const n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    console.log();

    const number = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

main();
