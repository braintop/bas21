function f(){

    return new Promise((resolve, reject) => {

        let number = Math.floor(Math.random() * 5)
        if(number %2 == 0){
            resolve("number is even")
        }
        else {
            reject("number is odd")
        }
    })
}
let result = f();
function yoodaSuccess(result){
    console.log(result);
}
function yoodaError(error){
    console.log(error);
}
result.then(yoodaSuccess).catch(yoodaError);