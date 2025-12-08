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
function f(){
    let result = generate7BoomAfterDelayAsync(7, 7);
    result.then((success)=>{
        generate7BoomAfterDelayAsync(700, 900)
        .then((success)=>{
            console.log(success);
            generate7BoomAfterDelayAsync(900, 1100)
            .then((success)=>{
                console.log(success);
            }).catch((error)=>{
                console.log(error);
            });
        }).catch((error)=>{
            console.log(error);
        });
        console.log(success);
    }).catch((error)=>{
        console.log(error);
    });
}
f();