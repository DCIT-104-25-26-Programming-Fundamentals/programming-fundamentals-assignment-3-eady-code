const readlineSync = require("readline-sync");

function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

function calculateAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total / numbers.length;
}

function findMaximum(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function findMinimum(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    const numbers = [];
    for (let i = 0; i < n; i++) {
        const num = readlineSync.questionFloat("Enter number " + (i + 1) + ": ");
        numbers.push(num);
    }

    console.log("\nResults:");
    console.log("Sum:     " + calculateSum(numbers));
    console.log("Average: " + calculateAverage(numbers));
    console.log("Maximum: " + findMaximum(numbers));
    console.log("Minimum: " + findMinimum(numbers));
}

main();
