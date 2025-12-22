let express = require('express');
let app = express();
app.use(express.json());
let persons = [
    {id: 1, name: "John", age: 30, city: "New York"},
    {id: 2, name: "Jane", age: 20, city: "Los Angeles"},
    {id: 3, name: "Jim", age: 30, city: "Chicago"}
];
app.get('/persons', (req, res) => {
    res.json(persons);
});
app.post('/persons', (req, res) => {
    let newId = persons[persons.length - 1].id + 1;
    let newPerson = {id: newId, ...req.body};
    persons.push(newPerson);
    res.json(persons);
});

app.delete('/persons/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.params);
    persons= persons.filter(person=>person.id != req.params.id);
    res.json(persons);
});

app.put('/persons/:id', (req, res) => {
    let id = +req.params.id;
    let person = persons.find(person=>person.id == id);
    if(!person){
        return res.status(404).json({message: "Person not found"});
    }
    person.name = req.body.name;
    person.age = req.body.age;
    person.city = req.body.city;
    res.json(person);
});
app.get('/persons/:id', (req, res) => {
    let id = +req.params.id;
    let person = persons.find(person=>person.id == id);
    if(!person){
        return res.status(404).json({message: "Person not found"});
    }
    res.json(person);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});