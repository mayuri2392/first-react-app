import React, { useState, useEffect } from 'react';
import checked from '../images/checked.png';
import unchecked from '../images/unchecked.png';
import './Todo.css';

const App = () => {
  const [todos, setTodos] = useState({todos: []});

  useEffect(() => {
    debugger;
    fetch('https://jsonplaceholder.typicode.com/todos').then(async r => {
      const _json = await r.json();
      setTodos({ todos: _json});
    })
  }, []);
  
  
    
  const markDone = (text) => {
    
    const _afterDone = todos.todos.map( todo => {
      if (todo.title === text){
        todo.completed = true
      }
      return todo;
    })

    setTodos({todos: _afterDone})
  }

  const markUndone = (text) => {
    const _afterDone = todos.todos.map( todo => {
      if (todo.title === text){
        todo.completed = false
      }
      return todo;
    })

    setTodos({todos: _afterDone})
  }

  const countDoneTasks = () => {
    let count = 0;
    todos.todos.forEach( todo => {
      if (todo.completed === true) {
        ++count;
      }
    })
    return count;
  }

  const count = countDoneTasks();
  return <div className='app'>
    <Date />
    <Day />
    {todos.todos.length > 0 ? 
      <TodoList>
        {todos.todos.map(t => <Todo 
          text={t.title} 
          completed={t.completed} 
          markDone={markDone}
          markUndone={markUndone}
        />)}
      </TodoList>
    : <h1>Loading</h1>}
    <Total total={count}/>
  </div>
}

const Date = () => {
  return <div className='date'>
    <div className='number'>12</div>
    <div className='month'>JAN 2016</div>
  </div>
}

const Day = () => {
  return <div className='day'>tuesday</div>
}

const TodoList = ({ children }) => {
  return <div className='todolist'>{ children }</div>
}

const Todo = ({ text, completed, markDone, markUndone }) => {
  if (!completed) {
    return <div className='todo' onClick={() => { markDone(text) }}>
      <div className='todo-text-unchecked'>{ text }</div>
      <img className='todo-unchecked' src={unchecked} alt='unchecked' />
    </div>
  } else {
    return <div className='todo' onClick={() => { markUndone(text) }}>
      <div className='todo-text-checked'>{ text }</div>
      <img className='todo-checked' src={checked} alt='checked' />
    </div>
  }
}

const Total = ({ total }) => {
  return <small>Total Tasks done: {total}</small>
}
export default App;
