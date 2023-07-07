//import files
import React, { useEffect } from "react";
import axios from "axios";
import '../Css/DashBoard.css';
import {Link, useNavigate} from 'react-router-dom';


//dashboard component
const DashBoard = ()=>{
  const navigate = useNavigate();

  //logout function
  const logout = ()=>{
    localStorage.removeItem('Token');
    navigate('/');
}

  //useeffect for verifying user
  useEffect(() => {
    //take the token from localstorage
    const Token = localStorage.getItem('Token');

    //passing a token by header
    axios.get('http://localhost:7000/admin/dashboard', {
      headers: {
        Authorization: Token
      }
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log('Access Error '+error);
      navigate('/error')
    })
  });
  
  return(
    <div className="dashBackground">
      <div className="topHeader">
        <h2>Riders United DashBoard</h2>
      </div>
      <div className="buttom clear">
        <div className="buttom-left">
          <Link className="Link">Add Member</Link> <br /> <br />
          <Link className="Link">Delete Member</Link> <br /> <br />
          <Link className="Link">Find Member</Link> <br /> <br />
          <Link className="Link">Update Member Info</Link> <br /> <br /> <br /> 
          <a href="" className="Link" onClick={logout}>Logout</a>
        </div>
        <div className="buttom-right"></div>
      </div>
    </div>
  );
};

//export 
export default DashBoard;