//  init     condition    increment
    let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

if (num1 > num2) {  
    for (let i = num1; i < num2; i++) {
        console.log(i);
    }
} else {
    for (let i = num2; i < num1; i++) {
        console.log(i);
    }
}



