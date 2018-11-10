import http from 'http';

import app from './app';

http.createServer(app).listen(9090, () => {
  console.log('Listening on port 9090!');
});
