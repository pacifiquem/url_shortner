import express from 'express'
import { postUrl, ClickCounter , contactUs} from '../controllers/url.controller';
import { Schema, JoiValidation } from '../middlewares/validation.middleware';
import genUrlGenerator from '../middlewares/genUrlGenerator.middleware';
import bodyParser from 'body-parser';

const router = express.Router();

router.route('/').post(bodyParser.json(), genUrlGenerator, JoiValidation(Schema.data) ,postUrl);
router.route('/clickcounter').get(bodyParser.json(), ClickCounter);
router.route('/contactus').post(contactUs);

export default router;