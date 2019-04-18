import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import User from './User';
import Home from './Home';

const Main = () => {
    return <main>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
    
      </Switch>
    </main>
}

export default Main;