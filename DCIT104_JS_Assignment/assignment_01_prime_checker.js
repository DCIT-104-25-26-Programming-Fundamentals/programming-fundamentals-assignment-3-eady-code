const readlineSync = require("readline-sync");

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function main() {
    const number = readlineSync.questionInt("Enter a number: ");

    if (isPrime(number)) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is NOT a prime number.");
    }
}

main();
