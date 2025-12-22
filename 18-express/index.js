let express = require('express');
let app = express();
app.get('/', (req, res) => {
    console.log(req.url);
    res.send('Hello daniel');
});

app.listen(3000);