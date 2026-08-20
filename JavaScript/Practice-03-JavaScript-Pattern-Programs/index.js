// /*
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
// */

// /*
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += "* ";
    }
    console.log(row);
}
// */

// /*
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += k;
    }
    console.log(row);
}
// */

// /*
for (let i = 1; i <= 7; i++) {
    let row = "";
    let num = i <= 4 ? i : 8 - i;
    for (let j = 1; j <= 4 - num; j++) {
        row += " ";
    }
    for (let k = 1; k <= num; k++) {
        row += num + " ";
    }
    console.log(row);
}
// */

// /*
for (let i = -3; i <= 3; i++) {
    let row = "";
    let stars = 4 - Math.abs(i);

    if (stars === 4) {
        for (let j = 1; j <= 7; j++) {
            row += "*";
        }
    } else {
        let spaces = 7 - (2 * stars);
        for (let k = 1; k <= stars; k++) {
            row += "*";
        }
        for (let l = 1; l <= spaces; l++) {
            row += " ";
        }
        for (let m = 1; m <= stars; m++) {
            row += "*";
        }
    }
    console.log(row);
}
// */
