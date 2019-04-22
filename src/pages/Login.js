import React from 'react';  
import UseForm from '../hooks/UseForm';

const Login = (props) => {
    const [values, onChange] = UseForm({
      email: '',
      password: ''
    });
  
   
    const submit = (e) => {
      e.preventDefault();
      alert(JSON.stringify(values));

    }
    return <div>
      <form onSubmit = {submit}>
        <h3>Login</h3>
       <input 
        type = 'email' 
        name = 'email'
        placeholder = 'Email'
        value = {values.email}
        onChange = { onChange } 
       />
    <br/>
    <input 
      type = 'password' 
      name = 'password'
      placeholder = 'Password'
      value = {values.password}
      onChange = { onChange } 
    />
    <br />
    <input type="submit" value="Login" />
    </form>
    </div>
  }


  export default Login;





 /*  const [email, setEmail] = useState('');
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
    name = 'email'
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

<input type="submit" value="Login" /> */