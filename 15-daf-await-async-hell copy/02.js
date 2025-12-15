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

async function handleGenerateClick(){
    const min = +document.getElementById("min").value;
    const max = +document.getElementById("max").value;
    try{
        let result =  await generate7BoomAfterDelayAsync(min, max);
        document.getElementById("result").innerHTML = result;

    }
   catch(error){
        document.getElementById("result").innerHTML = error;
    }
}