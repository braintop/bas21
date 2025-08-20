let num1 = Math.floor(Math.random()*30)
let num2 = Math.floor(Math.random()*30)
let sub = 0;
if(num1>num2){
    sub = num1-num2
}
else if(num1<num2){
    sub = num2-num1
}
console.log(num1 + " " + num2)
console.log(sub)
