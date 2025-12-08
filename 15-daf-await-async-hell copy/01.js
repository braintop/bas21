function generate7BoomAfterDelayAsync(min, max){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * (max - min + 1)) + min;
            if(number % 7 == 0|| number % 10 == 7){
                resolve("7Boom:" + number);
            }
            else {
                reject("Not 7:" + number);
            }
        }, 1000);
    });
    return p;
}
async function f(){
    try{
        let result =await generate7BoomAfterDelayAsync(700, 900);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

f();
console.log("continue....");