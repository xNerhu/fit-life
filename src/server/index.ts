import { createServer } from 'http';

import app from './app';

createServer(app).listen(9090, () => {
  console.log('Listening on port 9090!');
});
