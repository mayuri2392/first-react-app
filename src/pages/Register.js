import React from 'react'; 
import useForm from '../hooks/UseForm'; 

const Register = (props) => {
  const [values, onChange] = useForm({});
  const submit = (e) => {
    e.preventDefault();
    console.log(values);

    fetch('https://reqres.https://obscure-ocean-55890.herokuapp.com/users/register/api/register',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((response) => {
      response.json().then(jsonResponse => {
        console.log(jsonResponse)
      })
    })
  }
    return <div>
  <form onSubmit = {submit}>
         <h3>Register</h3>
    <input 
    
      type = 'username' 
      name = 'username'
      placeholder = 'Name'
      value = {values.username}
      onChange = { onChange } 
    />
    <br />
    <input 
      type = 'email' 
      name = 'email'
      placeholder = 'Email'
      value = {values.email}
      onChange = { onChange } 
    />
    <br />
    <input 
      type = 'password' 
      name = 'password'
      placeholder = 'Password'
      value = {values.password}
      onChange = { onChange } 
    />
  <br />
<input type="submit" value="Signup" />
</form>
    </div>
  }


  export default Register;






/* 
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
    </div> */