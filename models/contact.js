const mongoose = require('mongoose');
const contactForm = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email:{
        type: String,
        required : true,
    },
    description: {
        type: String,
    }
},
{timestamps: true}
);
const form = mongoose.model('contact' , contactForm);
module.exports = form;