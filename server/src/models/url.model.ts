import mongoose from "mongoose";
import urlSI from "../utils/urlSchemaTypes";

const UrlSchema:mongoose.Schema = new mongoose.Schema<urlSI>({
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
        default: 0
    },

    createAt: {
        type: Date,
        default: new Date()
    }

});

const UrlModel = mongoose.model<urlSI>('Url', UrlSchema);

export default UrlModel;