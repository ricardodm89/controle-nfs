import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Providers from '../pages/Providers'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fornecedores" component={Providers} />
    </Switch>
);


export default Routes;