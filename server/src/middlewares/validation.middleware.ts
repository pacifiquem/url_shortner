import Joi, { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";


export const JoiValidation = (schema: ObjectSchema) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false, 
                message: ''
            });
        }
    }
}


export const Schema = {

    data: Joi.object ({
        url: Joi.string().required().pattern(new RegExp('^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$')),
        genUrl: Joi.string().required()
    })
    
}