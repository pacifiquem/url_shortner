const { v4: uuidv4 } = require('uuid');

import { Response, Request, NextFunction } from 'express';

const genUrlGenerator = (req:Request, res:Response, next:NextFunction):void => {

    function generateUrl () {
        const randomString:string = uuidv4();
        const arrayOfRandomParts:string[] = randomString.split('-');
        const randomNumber:any = Math.floor(Math.random() * 6);
        const urlPart:string = arrayOfRandomParts[randomNumber];

        return urlPart;
    }

    const generatedUrl = generateUrl();

    if(generatedUrl != undefined && generatedUrl != null) {
        req.body.genUrl = `url-shortner-backend-service.onrender.com/${generatedUrl}`;
        next();
    }

}

export default genUrlGenerator;
