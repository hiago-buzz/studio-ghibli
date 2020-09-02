import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Films from './pages/Films';

export default function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/films" exact component={Films} />
            </Switch>
        </BrowserRouter>
    );
}