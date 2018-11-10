import * as express from 'express';
import * as bodyParser from 'body-parser';

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
  }

  private attachRoutes() {
    this.app.use('/test', TestRoute);
  }
}

export default new App().app;
