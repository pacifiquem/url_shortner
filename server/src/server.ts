import express, { Application } from 'express';

const app:Application = express();

app.listen(2000, () => console.log('server is in Dev Mode'));