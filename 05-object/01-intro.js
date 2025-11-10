let arr = ["oren", 20, "pizza", 40, 50];
for (let x in arr) {
    console.log(x);
}
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr.length);
console.log(arr[arr.length - 1]);

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    if (typeof person[key] === "string") {
        console.log(key);
    }
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
let obj = {
};

obj.name = "Jane";
obj.age = 20;
obj.city = "Los Angeles";
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["city"]);
