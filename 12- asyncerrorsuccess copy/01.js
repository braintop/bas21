function f(){

    let p = new Promise((resolve, reject) => {
        setInterval(() => {
            let number = Math.floor(Math.random() * 5)
            if(number == 0){
                reject("Error cant divide by 0")
            }
            else {
                resolve(10/number)
            }
        }, 1000)
    });

    return p
}
function yoodaError (error) {
    console.log(error)
}
function yoodaSuccess(result){
    console.log("success is " + result)
}
f() 
