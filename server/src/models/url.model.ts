import mongoose from "mongoose";
import urlSI from "../utils/urlSchemaTypes";

const UrlSchema:mongoose.Schema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },

    genUrl: {
        type: String,
        required: true,
        unique: true
    },

    visitCount: {
        type: Number,
        default: 0
    },

    createAt: {
        type: Date,
        default: new Date()
    }

});

const UrlModel = mongoose.model('Url', UrlSchema);

export default UrlModel;