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
        url: Joi.string().required().pattern(new RegExp('^(?:https?://|s?ftps?://)?(?!www | www\.)[A-Za-z0-9_-]+\.+[A-Za-z0-9.\/%&=\?_:;-]+$')),
        genUrl: Joi.string().required().pattern(new RegExp('^(?:https?://|s?ftps?://)?(?!www | www\.)[A-Za-z0-9_-]+\.+[A-Za-z0-9.\/%&=\?_:;-]+$'))
    })
    
}