const readlineSync = require("readline-sync");

const students = [];

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }
    const average = total / scores.length;
    return Math.round(average * 100) / 100;
}

function findStudentById(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }
    return null;
}

function addStudent() {
    const name = readlineSync.question("Student name: ").trim();

    if (name === "") {
        console.log("Error: Name cannot be empty.");
        return;
    }

    const id = readlineSync.questionInt("Student ID: ");

    if (findStudentById(id) !== null) {
        console.log("Error: A student with ID " + id + " already exists.");
        return;
    }

    const numScores = readlineSync.questionInt("How many scores? ");

    if (numScores <= 0) {
        console.log("Error: Number of scores must be greater than 0.");
        return;
    }

    const scores = [];
    for (let i = 0; i < numScores; i++) {
        const score = readlineSync.questionFloat("Enter score " + (i + 1) + ": ");
        scores.push(score);
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);
    console.log("Student \"" + name + "\" added successfully.");
}

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No student records found. Add a student to get started.");
        return;
    }

    const divider = "-".repeat(65);
    console.log(divider);
    console.log("Name                ID          Scores                   Average");
    console.log(divider);

    for (let i = 0; i < students.length; i++) {
        const s = students[i];
        const scoresStr = s.scores.join(", ");
        const avg = calculateAverage(s.scores).toFixed(2);

        console.log(
            s.name.padEnd(20) +
            String(s.id).padEnd(12) +
            scoresStr.padEnd(25) +
            avg
        );
    }

    console.log(divider);
}

function getStudentAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");
    const student = findStudentById(id);

    if (student === null) {
        console.log("Error: No student found with ID " + id + ".");
        return;
    }

    const avg = calculateAverage(student.scores).toFixed(2);
    console.log(student.name + "'s average score: " + avg);
}

function showMenu() {
    console.log();
    console.log("================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    while (true) {
        showMenu();
        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        if (choice === 1) {
            addStudent();
        } else if (choice === 2) {
            displayAllStudents();
        } else if (choice === 3) {
            getStudentAverage();
        } else if (choice === 4) {
            console.log("Goodbye!");
            break;
        } else {
            console.log("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();
