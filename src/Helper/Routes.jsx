import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Main from '../Components/Main';
import Login from '../Components/Form/Login';
import Home from '../Components/Form/Home';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path ='/' component={Login} />
                <Route exact path ='/home' component={Home} />
            </Switch>

                
            
        );
    }
}

export default Routes;