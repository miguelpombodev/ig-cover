import * as dotenv from 'dotenv'
import express from 'express';

dotenv.config();
const app = express();

app.use(express.json());
app.listen(3333, () => {
    if (process.env.SERVER) {
        console.log('Dev-server initialized')
    }
})