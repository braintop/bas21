let =  persons=[
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 20,
        city: "Los Angeles"
    },
    {
        name: "Jim",
        age: 30,
        city: "Chicago"
    }
]
console.log(persons[0].name);
console.log(persons[1].name);
console.log(persons[2].name);
console.log(persons[0].age);
console.log(persons[1].age);
console.log(persons[2].age);
console.log(persons[0].city);
console.log(persons[1].city);
console.log(persons[2].city);

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].name);
    console.log(persons[i].age);
    console.log(persons[i].city);
}
