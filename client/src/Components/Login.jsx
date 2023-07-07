//import files
import React, { useState } from 'react'
import '../Css/Register.css';
import '../Css/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

//register component
const Login=() =>{
  //for location redirect
  const navigate = useNavigate();

  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');

  //login handler
  const handleLogin = ()=>{
    axios.post('http://localhost:7000/admin/login', {username, password})
    //if login successfull
    .then((res)=>{
      console.log(res);
      localStorage.setItem('Token', res.data.Token);
      navigate('/dashboard');
    })
    .catch((error)=>{
      console.log('Login'+error);
      navigate('/error');
    })
  };

  //return login page
  return (
    <div className='background'>
      <Link className='exit' to='/'>Home</Link>
      <h2 className='header'>Login HERE</h2>
      <hr className='hr hrlogin'/>

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

        {/* submit button */}
        <input className='button loginbutton' type="submit" value='LogIn' onClick={handleLogin}/>
        <p className='p'>Don't have an Account. <Link style={{color:'Blue'}} to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

//export 
export default Login;