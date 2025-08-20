let num1 = Math.floor(Math.random()*50)
let num2 = Math.floor(Math.random()*50)
console.log("random numbers are: "+num1 + " " + num2)
if(num1>num2){
    console.log(num1+" u win1")
}
if(num2<num1){
    console.log(num2+" u loose")
}
if(num1==num2){
    console.log("nutral")
}
