import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogIn from '../containers/logIn/LogIn';
import ForgotPassword from '../containers/forgotPassword/ForgotPassword';

const Router = () => (
    <div>
        <Switch>
            <Route exact path='/' component={LogIn} />
            <Route path='/log_in' component={LogIn} />
            <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
    </div>
);


export default Router;