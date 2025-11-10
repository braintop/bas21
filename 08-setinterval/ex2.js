function  f(){
    console.log("Hello motti:)")
}

setTimeout(f,1000);

setTimeout(()=>{
    console.log("Hello motti:)")
},1000)