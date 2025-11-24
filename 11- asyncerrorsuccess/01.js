function f(successCallback, errorCallback){
    setInterval(() => {
        let number = Math.floor(Math.random() * 5)
        if(number == 0){
           // throw new Error("Error cant divide by 0")
           errorCallback("Error cant divide by 0")
        }
        else {
            successCallback(10/number)
        }
    }, 1000)
}
function yoodaError (error) {
    console.log(error)
}
function yoodaSuccess(result){
    console.log("success is " + result)
}
f(yoodaSuccess, yoodaError)

