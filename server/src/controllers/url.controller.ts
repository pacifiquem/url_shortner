import { Request, Response, NextFunction } from "express";
import UrlModel from "../models/url.model";
import ContactModel from "../models/contact.model";


export const home = async(req:Request, res:Response, next:NextFunction) => {
    try {
        
        res.status(200).json({
            success: true, 
            message: 'welcome home'
        });

    } catch (error) {
        console.log(error);
    }
}

export const postUrl =async (req:Request, res:Response, next:NextFunction) => {

try {
    const { url, genUrl } = req.body;
    const NewUrl = await UrlModel.create({
        url: url,
        genUrl: genUrl
    }, (err, data) => {
        if(err) {
            console.log(err)
            res.status(404).json({
                success: false,
                message: 'unable to insert into database'
            });
        }else {
            res.status(201).json( {
                success: true,
                data: data
            });
        }
    });

} catch (error) {

    console.log(error)
    res.status(500).json({
        success: 'false',
        message: 'server have failed'
    });

}

}


export const ClickCounter = async(req:Request, res:Response, next:NextFunction) => {
    try {

        const Url = await UrlModel.findOne({
            genUrl: req.body.url
        });

        if(Url) {
            res.status(200).json({
                success: 'true',
                data: Url.visitCount
            });
        }else {
            res.status(404).json({
                success: 'false',
                message: 'url not found'
            });
        }

    } catch (error) {

        console.log(error)
        res.status(500).json({
            success: 'false',
            message: 'server have failed'
        });

    }

}

export const contactUs = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const { name, email, message }  = req.body;

        const incomingChat = await ContactModel.create({name, email, message});

        if(incomingChat) {
            res.status(200).send("Thank you for feedback");
        }else {
            res.status(404).json({
                success: false,
                message: 'unable to insert into database'
            });
        }

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'unable to insert into database'
        });
    }
}