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
let result = generate7BoomAfterDelayAsync(7, 7);
result.then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);
});