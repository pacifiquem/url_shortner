import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import dbConfig from './config/db.config';

dotenv.config({
    path: `${__dirname}/config/.env`
});

const app:Application = express();
dbConfig();

app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} Mode at ${process.env.PORT}`));