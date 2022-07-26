require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/check', (req, res) => {
  res.end('OK');
});

app.get('/', (req, res, next) => {
  const folder = req.hostname === process.env.BASE_HOSTNAME
    ? 'static' : `sites/${req.hostname}`;

  express.static(folder)(req, res, next);
});

app.use((req, res) => {
  res.status(404)
    .sendFile('static/404.html', { root: __dirname });
})

app.listen((port), () => {
  console.log(`Litt is a go on port ${port}`);
});