function f() {
        let randomNumber = Math.floor(Math.random() * 2)
        result = 0
        if (randomNumber == 0) {
            throw new Error("Error cant divide by 0")
        }
        else {
            result = 10 / randomNumber
        }
        return result
}
//main
try{
    let result = f()
    console.log(result)
}
catch (error) {
    console.log("error is " + error)
}
finally {
    console.log("finally")
}
console.log("continue....")


function save(){ 
    try{
        let person = {
            name: "John",
            age:30,
            city: "New York"
        }
        
    let str = JSON.stringify(person)
    localStorage.setItem("person", str)
    alert("save")
   }
   catch (error) {
    alert("error is " + error)
   }
   finally {
    alert("finally")
   }
}
function load(){
    try{
        let str = localStorage.getItem("person")
        let p = JSON.parse(str)
        alert("hello " + p.name)
    }
    catch (error) {
        console.log("error is " + error)
    }
}

function tryToParse(str){
    try{
        let obj  = JSON.parse(str)
        console.log(obj)
    }
    catch (error) {
        console.log("error is " + error)
    }
}
