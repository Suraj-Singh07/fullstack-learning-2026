let a = 12;
let b = 13;
if (1 === true) {
    console.log('Executed');
}

if (0 == false) {
    console.log('Executed');
}

if (7 % 2 == true) {
    console.log('Executed');
}

if (2 > 1 == true) {
    console.log('Executed');
}

if (a > b) {
    console.log("a is smaller than b");
} else {
    console.log("b is greater than a");

}

if (12 > 3) {
    let a = 4;
    if (a > 3) {
        console.log("Yes!");
    } else {
        console.log("No!");

    }
} else {
    console.log("No!");
}

let num = 97;
if (num % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

let marks = 450;
let percentage = (marks / 500) * 100;
// if(percentage > 35){
//     if(percentage > 60){
//         if(percentage > 70){
//             if(percentage > 80){
//                 if(percentage > 90){
//                         console.log("Grade-A");
//                 }else{
//                     console.log("Grade-B"); 
//                 }
//             }else{
//                 console.log("Grade-C");
//             }
//         }else{
//             console.log("Grade-D");
//         }
//     }else{
//         console.log("Grade-E");
//     }
// } else{
//     console.log("Grade-F");   
// }

//Another way

if(percentage > 90){
    console.log("Grade-A");
} else{
    if(percentage > 80){
        console.log("Grade-B");
    } else{
        if(percentage> 70){
            console.log("Grade-C");
        }else{
            if(percentage>60){
                console.log("Grade-D");
            } else{
                if(percentage > 35){
                    console.log("Grade-E");
                } else{
                    if(percentage < 35){
                        console.log("Grade-F");
                    }
                }
            }
        }
    }
}
