import React, { useState } from 'react';  

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const changeValue = (email) => {
      setEmail(email.target.value);
      
    }
    const changePValue = (password) => {
      setPassword(password.target.value);
    }
    return <div>
         <h3>Login</h3>
    <input 
      type = 'email' 
      placeholder = 'Email'
      value = {email}
      onChange = { changeValue } 
    />
  
    <input 
      type = 'password' 
      placeholder = 'Password'
      value = {password}
      onChange = { changePValue } 
    />

<input type="submit" value="Login" />
    </div>
  }


  export default Login;