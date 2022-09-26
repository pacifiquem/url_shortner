import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { Response } from 'express';
import path from 'path'

dotenv.config({
    path: `../${path.join(__dirname, '..', 'config')}/.env`
});

const EmailSender = (res:Response, email:string, message:string):void => {
    
    const transporter:nodemailer.Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.EPASSWORD}`
        }
    })

    var mailOptions:nodemailer.SendMailOptions = {
        from: `${process.env.EMAIL}`,
        to:`${process.env.EMAIL}`,
        subject: `${email}>atshorturl.vercel.app`,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(404).json({
            success: 'false',
            message: 'unable to send Your feedback'
          });
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({
            success: 'true',
            message: 'Thank you for your feedback !'
          });
        }
      });

}

export default EmailSender;