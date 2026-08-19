let a = 3;
while (a > 0) {
    console.log(a);
    a--;
}

let x = 19;
let y = 1;
while (y <= 10) {
    console.log(x * y);
    y++;
}


let x = "Suraj";
let y = x.length - 1;
let z = 0;
while (z <= y) {
    console.log(x[z]);
    z++;
}



for (let i = 3; i > 0; i--) {
    for (let j = 2; j > 0; j--) {
        console.log("A");
    }
    console.log("B");
}



// Nested loop program to print A to Z with number 1-10 simultaneously
let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let y = x.length - 1;
for (let i = 0; i <= y; i++) {
    console.log(x[i]);
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}


let x = 3;
console.log(Math.sqrt(x));
console.log(Math.PI * 3);
console.log(Math.pow(x, 3));
console.log(Math.random());


console.log(Math.random() * 10);
console.log(Math.round(2.5));
console.log(Math.round(Math.random() * 100));


let x = Math.round(Math.random() * 10);
let y = Number(prompt("Enter a number"));
if (x === y) {
    console.log("You guessed the right no.");
} else {
    console.log("You guessed the wrong !no. the no. is " + x);
}



// program to guess no. and it is equal to computer 
let x = Math.round(Math.random() * 100);
let y = Number(prompt("Enter a number between 1 to 100"));

while (x != y) {
    if (y < x) {
        y = Number(prompt("Enter a number again! you guessed a smaller no."));
    } else {
        y = Number(prompt("Enter a number again! you guessed a greater no."));
    }
}
console.log("You guess the correct no." + x);


let x = [1, 23, 2, 89];
console.log(x);

let y = ['A', 'B', 'C'];
console.log(y);

let z = [1, 2, 'A', true];  // why this is not an array
console.log(z);
