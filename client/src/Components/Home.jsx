import React from 'react'
import '../Css/Home.css';
import { Link } from 'react-router-dom';

const Home=() =>{
  return (
    <div>
      <Link className='login' to='login'>LogIn</Link>
      <div className='homeBacground'>
        <h1 className='homeHeader'>Riders United Association.</h1>
        <a className='button' href="">Explore me</a>
      </div>
    </div>
  )
};

export default Home;


