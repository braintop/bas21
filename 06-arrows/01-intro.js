function plus(a, b) {
    return a + b;
}

let plus1 = (a,b)=>{
    return a + b;
}
let s = plus1(1, 2);
console.log(s);


function multiply(a, b) {
    return a * b;
}
let multiply1 = (a,b)=>{
    return a * b;
}
let m = multiply1(1, 2);
console.log(m);

let multiply2 = (a,b)=> a * b;
let m2 = multiply2(1, 2);
console.log(m2);

function square(a) {
    return a * a;
}
let square1 = (a)=>{
    return a * a;
}
let square3= a=> a * a;
let x = square(2);
console.log(x);

let y = square1(2);
console.log(y);

function greet(name) {
    return "Hello, " + name + "!";
}
let z = greet("John");
console.log(z);
 z = greet("כשבכקכקכקכקכ");
console.log(z);

let greet1 = (name)=>{
    return "Hello, " + name + "!";
}
let z1 = greet1("John");
console.log(z1);

let square2= a=> a * a;



let scan1 = (arr)=>{
    for(let x in arr) {
        console.log(x);
    }
}
let scan2 = (arr)=>{
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


