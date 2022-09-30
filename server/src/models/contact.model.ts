import mongoose from "mongoose";

const ContactSchema:mongoose.Schema = new mongoose.Schema({

    email: {
        type:String, 
        required: true
    },

    name: {
        type:String,
        required: true
    },

    message: {
        type: String,
        required: true

    },

    sentAt: {
        type: Date,
        default: new Date()
    }

});

const ContactModel = mongoose.model('contact', ContactSchema);

export default ContactModel;