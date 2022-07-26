import { Express } from 'express';

function registerRoutes(app: Express) {
  app.get('/', function (req, res) {
    res.render('index.ejs');
  });
}

export default registerRoutes;
