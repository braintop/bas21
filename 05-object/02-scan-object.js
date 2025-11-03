let person = {
    name: "John",
    age: 30,
    city: "New York"
};
let keys = Object.keys(person);// ["name", "age", "city"]
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}
let values = Object.values(person);// [30, "New York", "John"]
for (let i = 0; i < values.length; i++) {   
    console.log(values[i]);
}

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
for (let key in car) {
    console.log(key);
    console.log(car[key]);
}
for(let key in car) {
    if(typeof car[key] === "string") {
        console.log(car[key]);
    }
}