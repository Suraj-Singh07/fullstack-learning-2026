for (let i = 5; i > 0; i--) {
    console.log("Hello");
}

for (let i = 1; i <= 10; i++) {
    console.log(19 * i);
}


let even = 0;
let odd = 0;
let v = 0
for (let i = 1; i <= 5; i++) {
    let x = prompt("Enter a number");
    if (x === "" ) {
        v++;
    } else {
        x = Number(x);
        if (x % 2 == 0) {
            console.log(x + " is Even number");
            even++;
        } else {
            console.log(x + " is Odd number");
            odd++;
        }
    }
}
console.log("Even nos. " + even);
console.log("Odd nos. " + odd);
console.log("Empty values " + v); 
