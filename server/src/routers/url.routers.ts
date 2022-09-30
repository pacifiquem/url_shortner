import express from 'express'
import { postUrl, ClickCounter , contactUs, home, visitingUrl} from '../controllers/url.controller';
import { Schema, JoiValidation } from '../middlewares/validation.middleware';
import genUrlGenerator from '../middlewares/genUrlGenerator.middleware';
import bodyParser from 'body-parser';

const router = express.Router();

router.route('/').get(home);
router.route('/addurl').post(bodyParser.json(), genUrlGenerator, JoiValidation(Schema.data) ,postUrl);
router.route('/clickcounter').post(bodyParser.json(), ClickCounter);
router.route('/contactus').post(contactUs);
router.route('/:url').get(visitingUrl);

export default router;