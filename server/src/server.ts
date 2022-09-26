import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import mongoSanitize from 'express-mongo-sanitize';
import dbConfig from './config/db.config';
import router from './routers/url.routers';
import helmet from 'helmet';
import bodyParser from 'body-parser';

dotenv.config({
    path: `${__dirname}/config/.env`
});

const app:Application = express();
app.use(helmet());
dbConfig();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use('/', router);

app.listen(process.env.PORT, () => console.log(`server is in ${process.env.NODE_ENV} Mode at ${process.env.PORT}`));