import { createServer } from 'http';

import app from './app';

createServer(app).listen(8080, () => {
  console.log('Listening on port 8080!');
});
