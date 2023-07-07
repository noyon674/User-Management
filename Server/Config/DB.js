//import files
require('dotenv').config();
const Mongoose = require('mongoose');

//database link
const dbLink = process.env.DB_LINK;

//databse connection
Mongoose.connect(dbLink)
.then(()=>{
    console.log('DataBase is connected.');
})
.catch((err)=>{
    console.log(err.message);
    process.exit(1);
});