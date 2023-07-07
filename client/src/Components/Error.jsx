//import files
import React from 'react';
import '../Css/Register.css';
import '../Css/Error.css';
import { Link } from 'react-router-dom';

//error component
const Error=() =>{
  return (
    <div className='background'>
      <h2 className='errheader'>Incorrect username or password !</h2>
      <p className='des'>Try again. <Link to='/login' className='link'>LogIn</Link></p>
    </div>
  );
};


//export
export default Error;