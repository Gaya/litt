import 'dotenv/config';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;
const BASE_HOSTNAME = process.env.BASE_HOSTNAME || 'localhost';

app.get('/check', (req, res) => {
  res.end('OK');
});

app.get('/', (req, res, next) => {
  const folder = req.hostname === BASE_HOSTNAME
    ? 'static' : `sites/${req.hostname}`;

  express.static(folder)(req, res, next);
});

app.use((req, res) => {
  res.status(404)
    .sendFile('static/404.html', { root: __dirname });
})

app.listen((PORT), () => {
  console.log(`Litt is a go on port ${PORT}`);
});