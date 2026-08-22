# Day 20 - JavaScript Strings and Validation

This folder contains my Day 20 JavaScript practice from my **FullStack Learning 2026** journey.

## Topics Learned

* `String.fromCharCode()`
* `.includes()`
* `Number.isNaN()`
* `toLowerCase()`
* String indexing
* Input validation using `prompt()`

## Concepts Practiced

### String.fromCharCode()

Converted ASCII/Unicode numbers into characters.

Example:

```javascript
String.fromCharCode(65); // "A"
```

### .includes()

Checked whether a string contains specific characters.

Example:

```javascript
"aeiou".includes("a"); // true
```

### Number.isNaN()

Verified whether user input becomes `NaN` after converting it to a number.

## Programs Created

### 1. ASCII to Character Converter

Converted a number into its corresponding alphabet using `String.fromCharCode()`.

### 2. Vowel Checker (Number Input)

Accepted a number from **0–25** and checked whether its corresponding alphabet is a vowel.

### 3. Improved Vowel Checker

Used `.includes()` to simplify vowel checking.

### 4. Smart Vowel Checker

Accepted either:

* a number (`0–25`), or
* a single alphabet character.

Validated the input using `Number.isNaN()` and printed whether it was a vowel or not.

## Technologies Used

* HTML5
* JavaScript (ES6)
