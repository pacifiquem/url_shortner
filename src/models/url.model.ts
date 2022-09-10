const mongoose = require('mongoose');


const UrlSchema = mongoose.Schema({
    OrginalUrl : {
        type: String, 
        match: ['', 'please insert a valid Url'],
        required: true, 
        maxLength: [300, 'url can\'t be 300 characters long']
    },

    ShortUrl : {
        type: String, 
        match: ['', 'please insert a valid Url'],
        required: true, 
        maxLength: [300, 'url can\'t be 300 characters long']
    } 
});

const UrlModel = mongoose.model('Url', UrlSchema);