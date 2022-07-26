const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Litt is a go!');
});