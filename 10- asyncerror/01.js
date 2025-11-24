function f(errorCallback){
    setInterval(() => {
        let number = Math.floor(Math.random() * 5)
        if(number == 0){
           // throw new Error("Error cant divide by 0")
           errorCallback()
        }
        else {
            console.log(10/number)
        }
    }, 1000)
}
function yooda () {
    console.log("error is no pizza today")
}
function noam(){
    console.log("error is no money today")
}
function elChanan(){
    console.log("error is ganan")
}
f(yooda)
f(elChanan)
f(noam)
console.log("continue....")

