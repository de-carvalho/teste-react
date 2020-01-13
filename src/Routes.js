import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';
import Favorites from './pages/Favorites';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/favorites' component={Favorites} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;