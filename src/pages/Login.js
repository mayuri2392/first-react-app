import React from 'react';  
import useForm from '../hooks/UseForm';

const Login = (props) => {
  const [values, onChange] = useForm({});
  const submit = async(e) => {
    e.preventDefault();
    console.log(values);

    const response = await fetch('https://reqres.in/api/login',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    
    const jsonResponse = await response.json();
    console.log(jsonResponse);
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