import React, { useState } from 'react';  

const Register = (props) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const changeValue = (username) => {
        setUserName(username.target.value);
        
      }
    const changeEValue = (email) => {
      setEmail(email.target.value);
      
    }
    const changePValue = (password) => {
      setPassword(password.target.value);
    }
    return <div>
         <h3>Register</h3>
    <input 
      type = 'username' 
      placeholder = 'Name'
      value = {username}
      onChange = { changeValue } 
    />
    <input 
      type = 'email' 
      placeholder = 'Email'
      value = {email}
      onChange = { changeEValue } 
    />
  
    <input 
      type = 'password' 
      placeholder = 'Password'
      value = {password}
      onChange = { changePValue } 
    />

<input type="submit" value="Signup" />
    </div>
  }


  export default Register;