//import files
const Mongoose = require('mongoose');

//creating a admin schema
const adminSchema = Mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

//export schema
module.exports = Mongoose.model('admins', adminSchema);