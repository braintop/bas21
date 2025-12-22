let express = require('express');
let app = express();
app.use(express.json());
console.log("hi app");
let persons = [{name: "John", age: 30, city: "New York"}];
app.get('/', (req, res) => {
    console.log("get persons");  
    res.json(persons);
});

app.post('/', (req, res) => { 
    console.log(req.body);
    persons.push(req.body);
    res.json(persons);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});