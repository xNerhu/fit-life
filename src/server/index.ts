import { createServer } from 'http';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as dotenv from 'dotenv';

import controllers from './controllers';

const app = express();

dotenv.config();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

createServer(app).listen(8080, async () => {
  console.log('Listening on port 8080!');
});
