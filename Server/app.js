//import files
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./Router/adminRoutes');

//create express app
const app = express();

//Mandatory for app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//databse connection
require('./Config/DB');

//all routes for admin
app.use('/admin', adminRoutes);

//client error handling
app.use((req, res, next)=>{
    res.status(404).send({
        Message: 'Route is not Found.'
    });
    next();
});

//server error handling
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(505).send({
        Message: 'Server is Broken.'
    });
    next();
});

//export app
module.exports = app;