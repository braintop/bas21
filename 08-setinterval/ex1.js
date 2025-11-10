function  f(){
    console.log("Hello after 3 seconds")
}

setTimeout(f,3000);

let f = message => console.log(message)

let f = message =>{
    console.log(message)
} 
//()=>{}
// ()=>{
//     console.log("Hello motti:)")
// }

setTimeout(()=>{
    console.log("Hello motti:)")
},1000)