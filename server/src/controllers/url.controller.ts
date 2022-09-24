import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import UrlModel from "../models/url.model";


export const postUrl =async (req:Request, res:Response, next:NextFunction) => {

    const { url } = req.body;

    const NewUrl = await UrlModel.create({
        url: url
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

}