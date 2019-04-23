import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return <header>
    <nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/todos'>Todos</Link></li>
        <li><Link to='/template'>Template</Link></li>
      </ul>
    </nav>
  </header>
}


export default Nav