// /*
function HappyBirthDay() {
    console.log("Hello");
    console.log("How are you");
    console.log("Happy Birthday");
}
HappyBirthDay();
HappyBirthDay();
HappyBirthDay();
// */

// /*
function add() {
    let num1 = Number(prompt("Enter a number"));
    let num2 = Number(prompt("Enter a number"));
    let a = num1 + num2;
    console.log(a);
}
add();
// */

// /*
function add() {
    let num1 = Number(prompt("Enter a number"));
    let num2 = Number(prompt("Enter a number"));
    return num1 + num2;
}
let res = add() + 2;
console.log(res);
// */

// /*
function Hello(a) {
    return a;
}
let x = Hello("Suraj");
console.log(x);
// */

// /*
function add(x, y) {
    return x + y;
}
let res = add(5, 7);
console.log(res);

let a = (x, y) => {
    return (x + b)
}
console.log(a(5, 8));
// */

// /*
function Hello(a, b, c) {
    return a + b + c;
}
console.log(Hello(2, 6));
// */

// /*
// default function parameters
function greet(a = "Hello") {
    return a;
}

console.log(greet("Suraj"));
// */

// /*
// creating a function using rest operator
function demo(...a) {
    return a;
}
let x = demo(2, 3, 5, 8, 9);
console.log(x);
// */

// /*
// rock paper scissor game using function
function game() {
    let input1 = prompt("Enter a value for Player1: rock, paper or scissor");
    let input2 = prompt("Enter a value for Player2: rock, paper or scissor");
    let a = input1.toLowerCase();
    let b = input2.toLowerCase();
    if (a === b) {
        alert("Tie");
    } else if ((a === "rock" && b === "scissor") || (a === "paper" && b === "rock") || (a === "scissor" && b === "paper")) {
        alert("player1 Wins");
    } else {
        alert("player 2 Wins");
    }
}
game();
// */

// /*
// program to print number *10 - 10 times
function print(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(a + 10);
        a++;
    }
}
for (let i = 1; i <= 1; i++) {
    print(Number(prompt("Enter a value")));
}
// */
