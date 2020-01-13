const express = require('express')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const mongoose = require("mongoose");


// import routers
const homeRoute = require('./routes/index')

// initialize express app
const app = express()

// express static folder
app.use(express.static('public'))

//connection to mongodb
mongoose.connect("mongodb://localhost:27017/treking", {useNewUrlParser: true ,useUnifiedTopology: true }, (error)=>{
    if(!error)
        {
            console.log("success");
        }
    else
        {
            console.log("Error Connecting To database.")
        }
});

// morgan logger
app.use(morgan('dev'))

// ejs
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Routes
app.use('/', homeRoute)

const port = process.env.PORT || 3000;
// listen to port(server)
app.listen(port, ()=> console.log(`Server is started on ${port}`))