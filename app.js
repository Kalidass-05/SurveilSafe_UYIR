const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.redirect('/signupSuccess.html')
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/loginSuccess.html')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});