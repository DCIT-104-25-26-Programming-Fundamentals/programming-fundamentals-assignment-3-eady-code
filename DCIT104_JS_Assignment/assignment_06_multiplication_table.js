const readlineSync = require("readline-sync");

function printTable(number) {
    console.log("Multiplication Table for " + number + ":");
    for (let i = 1; i <= 12; i++) {
        console.log("  " + number + "  x  " + i + "  =  " + (number * i));
    }
}

function printAllTables(n) {
    if (n <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    for (let num = 1; num <= n; num++) {
        printTable(num);
        if (num < n) {
            console.log("---------------------------");
        }
    }
}

function main() {
    const number = readlineSync.questionInt("Enter a number for its multiplication table: ");

    if (number <= 0) {
        console.log("Error: Please enter a positive integer greater than 0.");
        return;
    }

    console.log();
    printTable(number);

    console.log();
    console.log("===================================");
    console.log();

    const n = readlineSync.questionInt("Enter N to print all tables from 1 to N: ");
    console.log();
    printAllTables(n);
}

main();
