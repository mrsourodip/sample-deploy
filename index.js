require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!');
});

app.get('/login', (req, res) => {
  res.send('Login Page!');
});

app.get('/youtube', (req, res) => {
  res.send('<h1>Hello youtube</h1>');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
