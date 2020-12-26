import * as dotenv from 'dotenv';
import express from 'express';

import './database'

import routes from './routes'

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes)
app.listen(3333, () => {
  if (process.env.SERVER === 'DEV') {
    console.log('Dev Server Initalized');
  }
});
