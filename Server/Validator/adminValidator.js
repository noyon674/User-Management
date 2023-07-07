//import files
require('dotenv').config();
const jwt = require('jsonwebtoken');

//admin validator
const Validator = (req, res, next)=>{

    //get token from header  
    const {authorization} = req.headers;
    try {
        //token taking without Bearer part
        const token = authorization.split(' ')[1];

        //token verifying 
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        //sending username 
        const {id, username} = decoded;
        req.username = username;
        next()
    } catch (error) {
        res.status(401).send("Authentication Error.");
    }
};

//export
module.exports = Validator;