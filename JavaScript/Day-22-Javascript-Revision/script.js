let x = "Hi there!"
// document.getElementById('title').innerHTML = 'Hello ' + x;

let y = 12.5;
console.log(y);

// Write a function that returns "Minor" if age is under 18, "Adult" if age is 18–59 and "Senior" if age is 60 or above
function getCategory(age) {
    if (age < 18) {
        return "Minor";
    } else if (age <= 59) {
        return "Adult";
    } else {
        return "Senior";
    }
}
console.log(getCategory(24));

// Write a function that returns "Too short" if the password has fewer than 6 characters and "OK" otherwise
function checkPassword(password) {
    if (password.length < 6) {
        return "Too short";
    } else {
        return "OK";
    }
}
console.log(checkPassword('Suraj@123'));

// Write a function that calculates BMI and Returns a category based on BMI
function getBMICategory(weightKg, heightM) {
    let BMI = weightKg / (heightM * heightM);
    if (BMI < 18.5) {
        return "Underweight";
    } else if (BMI <= 24.9) {
        return "Normal";
    } else if (BMI <= 29.9) {
        return "Overweight";
    } else {
        return "Obese"
    }
}
console.log(getBMICategory(58, 1.62));
console.log(getBMICategory(58, 1.529));
console.log(getBMICategory(78.5, 1.62));

// Write a function that takes an array of numbers and returns their total sum, using a for loop.
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));

// Write a function that takes an array of student objects and returns the name of the student with the highest score.
/*
function findHighestScorer(students) {
    let topScore = students[0].score;
    let topName = students[0].name;
    for (let i = 1; i < students.length; i++) {
        if (students[i].score > topScore) {
            topScore = students[i].score;
            topName = students[i].name;
        }
    }
    return topName;
}
console.log(findHighestScorer([
    { name: "Suraj", score: 85 },
    { name: "Anita", score: 92 },
    { name: "Vikram", score: 78 }
]));
*/

function findHighestScorer(students) {
    let topStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].score > topStudent.score) {
            topStudent = students[i];
        }
    }
    return topStudent.name;
}
console.log(findHighestScorer([
    { name: "Suraj", score: 85 },
    { name: "Anita", score: 92 },
    { name: "Vikram", score: 78 }
]));

// Get pending tasks
function getPendingTasks(tasks) {
    let pendingTasks = tasks.filter(s => s.done === false);
    return pendingTasks;
}
console.log(getPendingTasks([
    { task: "Buy groceries", done: false },
    { task: "Finish homework", done: true }
]));

// Add a new task
function addTask(tasks, taskName) {
    let newTask = { task: taskName, done: false };
    let allTasks = [...tasks, newTask,];
    return allTasks;
}
console.log(addTask([
    { task: "Buy groceries", done: false },
    { task: "Finish homework", done: true }
],
    "Clean the house"));

// Complete a task
function completeTask(tasks, taskName) {
    let allTasks = tasks.map(t => {
        if (t.task === taskName) {
            let updatedTasks = { ...t, done: true };
            return updatedTasks;
        } else {
            return t;
        }
    });
    return allTasks;
}
console.log(completeTask([
    { task: "Finish homework", done: true },
    { task: "Buy groceries", done: false }
],
    "Buy groceries"));
