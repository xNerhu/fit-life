import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { TestRoute } from '@server/routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.config();
    this.attachRoutes();
  }

  private config() {
    this.app.use('/', express.static('build'));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.get('*', (req, res) => {
      return res.sendFile('index.html', { root: 'build' });
    });
  }

  private attachRoutes() {
    this.app.use('/test', TestRoute);
  }
}

export default new App().app;
