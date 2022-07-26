import path from 'path';
import express, { RequestHandler } from 'express';
import { renderFile } from 'ejs';

import registerRoutes from './routes';

const app = express();

const PORT = process.env.PORT || 3000;
const BASE_HOSTNAME = process.env.BASE_HOSTNAME || 'localhost';

const appCheck: RequestHandler = (req, res) => {
  res.end('OK');
};

const serveStatic: RequestHandler = (req, res, next) => {
  const folder = req.hostname === BASE_HOSTNAME
    ? 'static' : `sites/${req.hostname}`;

  express.static(path.join(__dirname, '..', folder))(req, res, next);
};

const handleNotFound: RequestHandler = (req, res) => {
  res.status(404).render('404');
};

app.engine('ejs', renderFile);
app.set('view engine', 'ejs');

app.get('/check', appCheck);

app.use(serveStatic);

registerRoutes(app);

app.use(handleNotFound);

app.listen(PORT, () => console.info(`Litt.bio is a go on port ${PORT}`));
