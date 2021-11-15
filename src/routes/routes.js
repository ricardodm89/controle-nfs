import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Providers from '../pages/Providers'
import Dashboard from '../pages/Dashboard'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/fornecedores" component={Providers} />
    </Switch>
);


export default Routes;