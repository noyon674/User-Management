import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem('Token');
        navigate('/login');
    }
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
