import express from 'express'
import { postUrl, ClickCounter , contactUs, home} from '../controllers/url.controller';
import { Schema, JoiValidation } from '../middlewares/validation.middleware';
import genUrlGenerator from '../middlewares/genUrlGenerator.middleware';
import bodyParser from 'body-parser';

const router = express.Router();

router.route('/').get(home);
router.route('/addurl').post(bodyParser.json(), genUrlGenerator, JoiValidation(Schema.data) ,postUrl);
router.route('/clickcounter?:url').get(bodyParser.json(), ClickCounter);
router.route('/contactus').post(contactUs);

export default router;