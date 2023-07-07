//import files
require('dotenv').config();
const App = require('./app');


//define server Port
const port = process.env.PORT;

//start server from here
App.listen(port, ()=>{
    console.log(`Running at http://localhost:${port}`);
});