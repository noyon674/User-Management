//import files
const Router = require('express').Router();
const Validator = require('../Validator/adminValidator');
const {adminRegister, adminLogin, adminDashBoard} = require('../Controller/adminController');


//all routes here
Router.post('/register', adminRegister);
Router.post('/login', adminLogin);
Router.get('/dashboard', Validator, adminDashBoard);

//export all routes
module.exports = Router;