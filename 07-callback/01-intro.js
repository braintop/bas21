function plus(a, b) {
    return a + b;
}
let f = plus  
console.log(f)//[f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]

let s = f(1, 2);
console.log(s);///3

function f2() {
    console.log("netanel");
}
function sendEmail(){
    console.log("send email")
}
function printName(x,callback) {
    callback()
}
printName(f2);
printName(sendEmail);



function printNumber(callback) {
    callback(42)
}
printName(f2);
printName(sendEmail);


function squareNumber(number) {
    console.log(number * number)
}

printNumber(squareNumber);

function plus(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

function compute(callback,a,b) {
     result = callback(a,b)
     console.log(result)
}

 compute(plus,1,2)// 3 
 compute(multiply,1,2)//2 


let person = {
    name: "John",
    isracard: true,
    amount: 100
}

 function payIsracard(person,price,callback) {
    if(person.isracard && person.amount >= price) {
        person.amount -= price;
        callback(person)
    } else {
        console.log("Person does not have Isracard")
    }
 }

function yooda(person){
    console.log("ל יביא  תאנים " + person.name)
}

function elchanan(person){
    console.log("elechanan will train u " + person.name )
}
payIsracard(person,100,yooda)
payIsracard(person,100,elchanan)




function print(callback){
    callback()
}

function f1(){
    console.log("f1 start")
}
function f2(){
    console.log("f2 start")
}
function f3(){
    console.log("f3 start")
}

print(f1)// f1 start  
print(f2)// f2 start
print(f3)// f3 start



print(f1)// f1 start print end
print(f2)// f2 start print end
print(f3)// f3 start print end


function plus1(a, b) {
    return a + b;
}
function mult1(a, b) {
    return a * b;
}


function printResult(callback){
    let result = callback(42, 25)
    console.log("result is " + result)
}

printResult(plus1)// result is 67
printResult(mult1)// result is 1050
