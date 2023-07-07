//import files
require('dotenv').config();
const Admins = require('../Model/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//registration controller
const adminRegister = async (req, res)=>{
    try {
        //first find the admin according to username
        const admin = await Admins.findOne({username: req.body.username});
        //if admin already have that username
        if(admin) return res.status(200).send('Admin already exists.');

        //for password bcrypt
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) =>{
            //create new admin
            const newAdmin = new Admins({
                username: req.body.username,
                password: hash,
                phone: req.body.phone
            }); 

            //save admin and return response
            await newAdmin.save()
            .then((newAdmin) => {
                return res.status(201).send({
                    Success: true,
                    Message: 'Admin is created successfully.'
                });
            }).catch((err) => {
                return res.status(401).send({
                    Success: false,
                    Message: 'Ops! Try again to Registration',
                });
            });
        });
    } catch (error) {
        res.status(401).send(error);
    };
};


//login controller
const adminLogin = async (req, res)=>{
    try {
        //find admin using username
        const findAdmin = await Admins.findOne({username: req.body.username});

        //username matching for login
        if(!findAdmin){
            return res.status(401).send({
                Message: 'Admin is not Found.'
            });
        }

        //password matching for login
        if(!bcrypt.compareSync(req.body.password, findAdmin.password)){
            return res.status(401).send({
                Message: 'Incorrect password.'
            });
        }

        //if username and password is matche that mean user is able to login
        //now create a token when user is loggedin
        const payload = {
            id: findAdmin._id,
            username: findAdmin.username
        };

        //token created
        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '5h'});

        //after creating token
        return res.status(200).send({
            Success: true,
            Message: 'Admin is loggedIn successfully.',
            Token: 'Bearer '+token
        });

    } catch (error) {
        res.status(401).send(error);
    };
};


//dashboard controller
const adminDashBoard = (req, res)=>{
   return res.send('DashBoard accessable for '+req.username);
};


//export all controller
module.exports = {adminRegister, adminLogin, adminDashBoard};