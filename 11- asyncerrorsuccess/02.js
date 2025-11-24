function runWithTimeout(actionName, delay, errorCallback){
    if(delay < 0 || delay > 10000){
        errorCallback()
    }
    else {
        setTimeout(() => {
            console.log(actionName)
        }, delay)
    }
}
function yooda(){
    console.log("error is no pizza today")
}
function noam(){
    console.log("error is no money today")
}
function elChanan(){
    console.log("error is ganan")
}
runWithTimeout("yooda", 1000000000, yooda)
runWithTimeout("noam", 2000, noam)
runWithTimeout("elChanan", 3000, elChanan)
