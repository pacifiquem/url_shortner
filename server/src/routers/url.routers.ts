import express from 'express'
import { postUrl } from '../controllers/url.controller';
import { Schema, JoiValidation } from '../middlewares/validation.middleware';
import genUrlGenerator from '../middlewares/genUrlGenerator.middleware';

const router = express.Router();

router.route('/addUrl').post(genUrlGenerator, JoiValidation(Schema.data) ,postUrl);

export default router;