function f(){  
    counter =0   
    let intervalId = setInterval(()=>{
        counter+=1
        console.log(counter)
        if(counter == 3){
            clearInterval(intervalId)
        }
    },1000) 
}
f()


function f2(){
    let id = setInterval(()=>{
        console.log("Hello motti:)")
    },1000)
    setTimeout(() => {
        clearInterval(id) 
    }, 3000);
    
}
f2()
