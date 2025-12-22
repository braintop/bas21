let app = require('express')();

console.log("hi app");
let person = [{name: "John", age: 30, city: "New York"}];
app.get('/', (req, res) => {
    console.log("get persons");  

    res.json(person);
});

app.post('/', (req, res) => { 
    console.log("person added");  
    res.json("added person");
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});