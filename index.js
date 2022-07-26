const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req);
});

app.listen(port, () => {
  console.log(`Litt is a go on port ${port}`);
});