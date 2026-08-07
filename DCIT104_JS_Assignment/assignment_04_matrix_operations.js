const readlineSync = require("readline-sync");

function readMatrix(rows, cols, label) {
    console.log("Enter the " + label + " (" + rows + " x " + cols + "):");
    const matrix = [];
    for (let r = 0; r < rows; r++) {
        const row = [];
        const input = readlineSync.question("  Enter row " + (r + 1) + ": ").trim().split(" ");
        for (let c = 0; c < cols; c++) {
            row.push(Number(input[c]));
        }
        matrix.push(row);
    }
    return matrix;
}

function displayMatrix(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        let line = "  ";
        for (let c = 0; c < matrix[r].length; c++) {
            line = line + String(matrix[r][c]).padStart(7);
        }
        console.log(line);
    }
}

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let c = 0; c < cols; c++) {
        const newRow = [];
        for (let r = 0; r < rows; r++) {
            newRow.push(matrix[r][c]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(a, b) {
    const result = [];
    for (let r = 0; r < a.length; r++) {
        const row = [];
        for (let c = 0; c < a[0].length; c++) {
            row.push(a[r][c] + b[r][c]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(a, b) {
    const m = a.length;
    const n = a[0].length;
    const p = b[0].length;
    const result = [];

    for (let r = 0; r < m; r++) {
        const row = [];
        for (let c = 0; c < p; c++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum = sum + a[r][k] * b[k][c];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function main() {
    console.log("==================================================");
    console.log("PART A — Matrix Transpose");
    console.log("==================================================");

    const rows = readlineSync.questionInt("Enter number of rows   : ");
    const cols = readlineSync.questionInt("Enter number of columns: ");
    const matrix = readMatrix(rows, cols, "matrix");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);
    console.log("\nTransposed Matrix:");
    displayMatrix(transpose(matrix));

    console.log("\n==================================================");
    console.log("PART B — Matrix Addition");
    console.log("==================================================");

    const bRows = readlineSync.questionInt("Enter number of rows   : ");
    const bCols = readlineSync.questionInt("Enter number of columns: ");
    const m1 = readMatrix(bRows, bCols, "first matrix");
    const m2 = readMatrix(bRows, bCols, "second matrix");

    console.log("\nMatrix 1:");
    displayMatrix(m1);
    console.log("\nMatrix 2:");
    displayMatrix(m2);
    console.log("\nSum (Matrix 1 + Matrix 2):");
    displayMatrix(addMatrices(m1, m2));

    console.log("\n==================================================");
    console.log("PART C — Matrix Multiplication");
    console.log("==================================================");

    const m = readlineSync.questionInt("Enter rows    for Matrix A              : ");
    const n = readlineSync.questionInt("Enter columns for Matrix A (= rows for B): ");
    const p = readlineSync.questionInt("Enter columns for Matrix B              : ");
    const a = readMatrix(m, n, "Matrix A");
    const b = readMatrix(n, p, "Matrix B");

    console.log("\nMatrix A:");
    displayMatrix(a);
    console.log("\nMatrix B:");
    displayMatrix(b);
    console.log("\nProduct (A x B):");
    displayMatrix(multiplyMatrices(a, b));
}

main();
