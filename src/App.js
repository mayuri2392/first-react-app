import React from 'react'; 
import  Nav  from './components/Nav';
import  Main from './components/Main';


const App = () => {
  return <div>
    <Nav />
    <Main />
   </div>
}



































/* 
function App(){
  return <div><Math  a={1} b={2} /></div>
} */

/* function App(){
return <div>
  <Body text='123'>
  <Math  a={1} b={2} />
  <br />
  <a href= "www.google.com">Go to google.com</a>
  <List items = {items} />
  </Body>
</div>
} */


/* 
const Button = () => {
  const astroLabs = (value) => {
    console.log(value);
  }
  return <div>
    <spam>AstroLabs</spam>
    <ChangeColor setColor={astroLabs}/>
  </div>
}

const ChangeColor = ({setColor}) => {
  return <button onClick={() => {setColor('green')}}>Make me green</button>
}
const Email = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const changeValue = (email) => {
    setEmail(email.target.value);
    
  }
  const changePValue = (password) => {
    setPassword(password.target.value);
  }
  return <div><input 
    type = 'email' 
    value = {email}
    onChange = { changeValue } 
  />

  <input 
    type = 'password' 
    value = {password}
    onChange = { changePValue } 
  />

  <BigText  email ={email}/>
  </div>
}

const BigText = ({email}) => {
  return <h1>{email}</h1>
} */
/* function App(){
  const items = ['Asrto', 'Lab', 'JLT'];
  return <div>
    <Button />
    <Counter />
  </div>
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const incrementValue = () => {
    if(counter < 5){
    setCounter(counter + 1) 
    } 
  }
  const decrementValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
    }
  }
  return <div>
    { counter }
    <button onClick = {incrementValue}>Increment</button>
    <button onClick = {decrementValue}>Decrement</button>
  </div>
}

const Button = () => {
  const [color, setColor] = useState('red');
  const changeColor = () => {
    if(color == 'red'){
      setColor('green');
    }else {
      setColor('red');
    }
    
  }
  return <div>
    <button onClick = { changeColor }
    style={{color: color}}>
    Change Color!</button>
    </div>
}

const List = ({items}) => {
  return <div>
     {items.map((item) => {
        return <h1 key={item}>{item}</h1>
    })}
  </div>
}

const Body = (props) => {
  return <div>{props.children}</div>
}
function Math(props){
  return <PlusOperation x={props.a} y={props.b} />
}

function PlusOperation(props){
  return <div>{props.x + props.y}</div>
}
 */
export default App;