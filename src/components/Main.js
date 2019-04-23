import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Todos from '../pages/Todos';
import Home from '../pages/Home';
import Template from '../pages/Template.js';

const Main = () => {
    return <main>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/todos" component={Todos} />
        <Route path="/template" component={Template} />
    
      </Switch>
    </main>
}

export default Main;