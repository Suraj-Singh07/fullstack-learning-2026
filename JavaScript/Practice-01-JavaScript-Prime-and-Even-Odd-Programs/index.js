// Check Odd and Even numbers up to a given number
let even = "";
let odd = "";
let x = Number(prompt("Enter number"));
if (x < 1) {
    console.log("Please enter number > (0) zero");
} else {
    for (let i = 1; i <= x; i++) {
        if (i % 2 == 0) {
            if (even === "") {
                even += i;
            } else {
                even += ", " + i;
            }
        } else {
            if (odd === "") {
                odd += i;
            } else {
                odd += ", " + i;
            }
        }
    }
    console.log("Even numbers:- " + even);
    console.log("Odd numbers:- " + odd);
}


// Check number is prime or not

let x = Number(prompt("Enter a number"));
if (x <= 1) {
    console.log(x + " is not a prime number");
} else {
    let i;
    for (i = 2; i < x; i++) {
        if (x % i === 0) {
            console.log(x + " is not a prime number");
            break;
        }
    }
    if(i === x){
        console.log(x + " is a prime number");
    }
}


// Check Prime and Non-Prime numbers up to a given number
let isPrime = "";
let notPrime = "";
let x = Number(prompt("Enter the number"));
if (x <= 2) {
    console.log(x + " is not a prime number");
} else {
    for (let i = 2; i <= x; i++) {
        let j;
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                if (notPrime === "") {
                    notPrime += i;
                } else {
                    notPrime += ", "+ i;
                }
                break;
            }
        }
        if(j === i){
            if(isPrime === ""){
                isPrime += i;
            }else{
                isPrime += ", "+ i;
            }
        }
    }
    console.log(isPrime);
    console.log(notPrime);
}
