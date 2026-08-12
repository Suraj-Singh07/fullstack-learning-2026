let a = 3;
if (a = 4) {
    console.log("A");
} else {
    console.log("B");
}

// if-else if ladder

if (6 == 7) {
    console.log("A");
} else if (false) {
    console.log("B");
} else if (true) {
    console.log("C");
} else {
    console.log("D");
}

// Grade program using if-else if ladder

let marks = 378;
let percentage = (marks / 500) * 100;
if (percentage > 90) {
    console.log("A-Grade");
} else if (percentage > 80) {
    console.log("B-Grade");
} else if (percentage > 70) {
    console.log("C-Grade");
} else if (percentage > 60) {
    console.log("D-Grade");
} else if (percentage > 35) {
    console.log("E-Grade");
} else if (percentage < 35) {
    console.log("F-Grade");
} else {
    console.log("Incorrect marks");
}

console.log(true && (!false || false) && true);

// rock paper and scissor program using else-if ladder

let meet = "rock";
let shreya = "paper";
if (meet == "rock" && shreya == "paper") {
    console.log("Shreya wins");
} else if (meet == "rock" && shreya == "scissor") {
    console.log("Meet wins");
} else if (meet == "paper" && shreya == "rock") {
    console.log("Meet wins");
} else if (meet == "paper" && shreya == "scissor") {
    console.log("Shreya wins");
} else if (meet == "scissor" && shreya == "rock") {
    console.log("Shreya wins");
} else if (meet == "scissor" && shreya == "paper") {
    console.log("Meet wins");
} else {
    console.log("Tie");
}

// rock paper and scissor program using single else-if

let meet = prompt("choose between rock, paper, scissor");
let shreya = prompt("choose between rock, paper, scissor");
if (meet === shreya) {
    alert("Tie");

} else if ((meet === "rock" && shreya === "scissor") || (meet === "paper" && shreya === "rock") || (meet === "scissor" && shreya === "paper")) {
    alert("Meet wins");

} else {
    alert("Shreya wins");
}


let x = prompt("Enter a number");
let y = Number(x)
alert(y + y);
