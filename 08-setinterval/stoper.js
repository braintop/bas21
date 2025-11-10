counter = 0 
function f(){
    counter++
    console.log("hello" + counter)
}
//f()
setInterval(f,1000)// מופעל כל שניה

function f(){
    counter++
    console.log("hello" + counter)
}
function g(){
    console.log("stop")
}
setInterval(f,1000)// מופעל כל שניה
setTimeout(g,5000)//  אחרי 5 שניות תופעל g 

