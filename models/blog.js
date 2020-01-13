const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: email,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    photos: {
        type: Image
    }
})

module.exports = mongoose.model('Blog', blogSchema)