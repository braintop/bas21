let num1 = Math.floor(Math.random()*100)
let num2 = Math.floor(Math.random()*100)

if((num1%2==0 && num2%2==1)|| (num1%2==1 && num2%2==0)){
    console.log("one is even and one is odd")
}
else if((num1%2==0 && num2%2==0)|| (num1%2==1 && num2%2==1)){
    console.log("both are even or both are odd")
}
else{
    console.log("bla bla bla")
}

