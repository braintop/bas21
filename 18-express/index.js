let express = require('express');
let app = express();
app.get('/', (req, res) => {
    console.log(req.url);
    res.send('Hello daniel');
});

app.get('/about', (req, res) => {
    console.log(req.url);

    res.send('About page');
});

app.get('/contact', (req, res) => {
    console.log(req.url);

    res.send('Contact page');
});

app.get('/products', (req, res) => {
    res.send('Products page');
});
app.get('/person/dodi', (req, res) => {
    console.log(req.url);

    res.send('person dodi');
});

app.get('/yooda', (req, res) => {

    res.send('hi yooda');
});
app.listen(3000);