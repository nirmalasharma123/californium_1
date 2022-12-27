const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDeleted:{
        type:String,
        default:false
    },
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)
