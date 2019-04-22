import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Todos from '../pages/Todos';
import Home from '../pages/Home';

const Main = () => {
    return <main>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/todos" component={Todos} />
    
      </Switch>
    </main>
}

export default Main;