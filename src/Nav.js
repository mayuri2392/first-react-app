import React from 'react';
import { Route, Link } from 'react-router-dom';


const Nav = () => {
  return <div>
    <Link to={'/login'}>Login</Link>
    <br />
    <Link to={'/register'}>Register</Link>
    <br />
    <Link to={'/user'}>User</Link>
    <br />
    <Link to={'/'}>Home</Link>
    <br />
  </div>
}




export default Nav;