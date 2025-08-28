// && = וגם = and 
// || = או = or 

//x y  x&&y  x||y !x
//0 0  0      0    1
//0 1  0      1    1
//1 0  0      1    0
//1 1  1      1    0


let x1 = Math.floor(Math.random()*100)
let x2 = Math.floor(Math.random()*100)
let x3 = Math.floor(Math.random()*100)

if(x1>x2 && x1>x3){
    console.log(x1+" is the biggest number")
}
else if(x2>x1 && x2>x3){
    console.log(x2+" is the biggest number")
}
else{
    console.log(x3+" is the biggest number")
}