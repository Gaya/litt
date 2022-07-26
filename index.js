const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/check', (req, res) => {
  res.end('OK');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req.host);
});

app.listen(port, () => {
  console.log(`Litt is a go on port ${port}`);
});