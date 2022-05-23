/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as Types from '@full-nx/types';
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to back!' });
  const a: Types.Type = {
    someType: 'asd'
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
