const readlineSync = require("readline-sync");

const tasks = [];

function addTask() {
    const description = readlineSync.question("Enter task: ").trim();

    if (description === "") {
        console.log("Task cannot be empty. Nothing was added.");
        return;
    }

    tasks.push(description);
    console.log("Task added: \"" + description + "\"");
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty. Add a task to get started!");
        return;
    }

    console.log("Your Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log("  " + (i + 1) + ". " + tasks[i]);
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log("There are no tasks to delete.");
        return;
    }

    viewTasks();

    const taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Task number must be between 1 and " + tasks.length + ".");
        return;
    }

    const removed = tasks[taskNumber - 1];
    tasks.splice(taskNumber - 1, 1);
    console.log("Task \"" + removed + "\" has been removed.");
}

function showMenu() {
    console.log();
    console.log("============================");
    console.log("      TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

function main() {
    while (true) {
        showMenu();
        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        if (choice === 1) {
            addTask();
        } else if (choice === 2) {
            viewTasks();
        } else if (choice === 3) {
            deleteTask();
        } else if (choice === 4) {
            console.log("Goodbye!");
            break;
        } else {
            console.log("Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();
