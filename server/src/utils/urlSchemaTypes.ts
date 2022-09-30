import mongoose from "mongoose";


interface urlSI extends mongoose.Document {

    url: {
        type: String,
        required: boolean,
    },

    genUrl: {
        type: String
        required: boolean,
        unique: boolean
    },

    visitCount: {
        default: number
    },

    createAt: {
        type: Date
        default: Date
    }

}

export default urlSI;