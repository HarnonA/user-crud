import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import signIn from './pages/signIn/index';
import Home from './pages/Home/index';
import signUp from './pages/signUp/index';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={signIn} />
                <Route path='/home' component={Home} />
                <Route path='/signup' component={signUp} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;


