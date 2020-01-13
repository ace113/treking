const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    mobile:{
        type: Number
    },
    email:{
        type: email,
        required: true
    },
    password:{
        type: password,
        required: true
    },
    panCard:{
        type: File,
        required: false
    },
    guideLicense: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('User', userSchema)