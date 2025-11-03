let s1 = {
    name: "John",
    age: 30,
    city: "New York"
};
let s2 = {
    name: "Jane",
    age: 20,
    city: "Los Angeles"
};

let person = {
    salary: 1000,
    age: 30,
    
};
function sayHello(student) {
    console.log("Hello, " + student.name + " from " + student.city + "!");
}

function printKeys(obj) {
    for (let key in obj) {
        console.log(key);
    }
}
sayHello(s1);
sayHello(s2);
sayHello(person);
printKeys(s1);
printKeys(s2);
printKeys(person);

