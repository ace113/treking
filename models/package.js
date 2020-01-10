const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    overview:{
        type: Text,
        required: true
    },
    location:{
        type: String,
        required: false
    },
    itineary:{
        type:String
        
    },
    gallery:{
        type: File,
        required: false
    },
    tripHighlights:{
        type:Text
    }
})

module.exports = mongoose.model('Package', packageSchema)