import mongoose from "mongoose";
import urlSI from "../utils/urlSchemaTypes";

const UrlSchema:mongoose.Schema = new mongoose.Schema<urlSI>({
    url: {
        required: true,
        unique: false,
        match:  '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
    },

    genUrl: {
        required: true,
        unique: true,
        match: '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$'
    },

    visitCount: {
        default: 0,
    },

    createAt: {
        default: new Date()
    }

});

const UrlModel = mongoose.model<urlSI>('Url', UrlSchema);

export default UrlModel;