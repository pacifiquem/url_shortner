import express from 'express'
import { postUrl } from '../controllers/url.controller';
import { Schema, JoiValidation } from '../middleware/validation';

const router = express.Router();

router.route('/addUrl').post(JoiValidation(Schema.data), postUrl);

export default router;