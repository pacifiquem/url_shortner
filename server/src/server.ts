import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import mongoSanitize from 'express-mongo-sanitize';
import dbConfig from './config/db.config';
import router from './routers/url.routers';

dotenv.config({
    path: `${__dirname}/config/.env`
});

const app:Application = express();
dbConfig();

app.use(express.json());
app.use(mongoSanitize());
app.use('/', router);

app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} Mode at ${process.env.PORT}`));