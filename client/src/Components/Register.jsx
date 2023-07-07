//import files
import React, { useState } from 'react'
import '../Css/Register.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

//register component
const Register=() =>{
  //for rendering location
  const navigate = useNavigate();

  //for took input values
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  //registration handler
  const handleRegister = ()=>{
    axios.post('http://localhost:7000/admin/register', {username, password, phone})
    //if register successful then redirect to the login page
    .then((res)=>{
      alert(res.data);
      navigate('/login');
    })
    .catch((error)=>{
      console.log('Register '+error);
      navigate('/error');
    })
  };

  //return function
  return (
    <div className='background'>
      <Link className='exit' to='/'>Home</Link>
      <h2 className='header'>Registration HERE</h2>
      <hr className='hr'/>

      {/* Registration form */}
      <div className='regForm'>
        {/* username field */}
        <div className='div'>
          <label className='label' htmlFor="username"> Username: </label>
          <input className='input ' type="text" id='username' placeholder='Enter Username' value={username} onChange={(e)=>{
            setuserName(e.target.value)}} required/> <br />
        </div>

        {/* password field */}
        <div className='div'>
          <label className='label' htmlFor="password"> Password: </label>
          <input className='input inputP' type="password" id='password' placeholder='Enter Password' value={password} onChange={(e)=>{
            setPassword(e.target.value)}} required/> <br />
        </div>

        {/* contact number field */}
        <div className='div'>
          <label className='label' htmlFor="phone"> Phone: </label>
          <input className='input inputPh' type="text" id='phone' placeholder='Enter Phone Number' value={phone} onChange={(e)=>{
            setPhone(e.target.value)}} required/> <br />
        </div>

        {/* submit button */}
        <input className='button Rbutton' type="submit" value='Register' onClick={handleRegister}/>
        <p className='p'>Already have an Account. <Link to='/login' style={{color:'blue'}}>LogIn</Link></p>
      </div>
    </div>
  );
};

//export 
export default Register;