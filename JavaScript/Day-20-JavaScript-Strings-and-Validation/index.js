let x = 65;
console.log(String.fromCharCode(x));

// /* 
// Program to check the given input is vowel or not
let x = Number(prompt("Enter a number 0 to 25"));
let y = "abcdefghijklmnopqrstuvwxyz"

if (x === 0 || x === 4 || x === 8 || x === 14 || x === 20) {
    console.log("Your given input " + x + " is a vowel i.e. " + y[x]);
} else {
    console.log("Your given input " + x + " is not a vowel");
}
// */

// /*
let input = Number(prompt("Enter a number 0 to 25"));
let alphabet = "abcdefghijklmnopqrstuvwxyz";

if (input >= 0 && input <= 25) {
    let letter = alphabet[input];
    if ("aeiou".includes(letter)) {
        console.log(`Your given input ${input} is a vowel i.e. ${letter}`);
    } else {
        console.log(`Your given input ${input} is not a vowel`);
    }
} else {
    console.log("Enter a number exactly between 0 and 25");
}
// */


let input = prompt("Enter a number 0-25 or a single character");
let alphabet = "abcdefghijklmnopqrstuvwxyz";

if (input !== "") {
    let num = Number(input);
    if (Number.isNaN(num)) {
        let letter = input.toLowerCase();
        if (letter.length === 1) {
            if ("aeiou".includes(letter)) {
                console.log(`Your input "${letter}" is a vowel`);
            } else {
                console.log(`You input "${letter}" is not a vowel`);
            }
        } else {
            console.log("Enter only one single character");
        }
    } else {
        if (num >= 0 && num <= 25) {
            let alphaLetter = alphabet[input];
            if ("aeiou".includes(alphaLetter)) {
                console.log(`Your given input ${input} is a vowel i.e. ${alphaLetter}`);
            } else {
                console.log(`Your given input ${input} is not a vowel`);
            }
        } else {
            console.log("Enter a number exactly between 0 and 25");
        }
    }
} else {
    console.log("You didn't enter anything");
}
