import mongoose from "mongoose";


interface urlSI extends mongoose.Document {

    url: {
        type: String,
        required: boolean,
        unique: boolean,
        match: String
    },

    genUrl: {
        type: String
        required: boolean,
        unique: boolean,
        match: String
    },

    visitCount: {
        type: Number
        default: Number
    },

    createAt: {
        type: Date
        default: Date
    }

}

export default urlSI;