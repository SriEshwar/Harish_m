const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, phone, email, password } = req.body;
    const userInfo = `Name: ${name}, Phone: ${phone}, Email: ${email}, Password: ${password}`;
    res.send(userInfo);
});
 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
