// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can process the form data (e.g., send an email, save to a database)

    res.render('success', { name });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});