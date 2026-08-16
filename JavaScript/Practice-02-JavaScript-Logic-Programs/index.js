// Printing reverse of an array

let array = ['A', 'm', 'a', 'a', 'n'];
let x = array.length - 1;
console.log(x);

for (let i = x; i >= 0; i--) {
    console.log(array[i]);
}


// Checking given input isPalindrome or not

let x = prompt("Enter a word or number");
let y = x.length - 1;
console.log(typeof(x));

let z = "";
for (let i = y; i >= 0; i--) {
    z += x[i];
}
if (x === z) {
    console.log("isPalindrome");
} else {
    console.log("notPalindrome");
}


//Factorial of a given number

let x = prompt("Enter a number");
if (x < 0) {
    console.log("Enter number greater than 0");
} else {
    let y = 1;
    for (let i = 1; i <= x; i++) {
        y *= i;
    }
    console.log(x + "!= " + y);

}
