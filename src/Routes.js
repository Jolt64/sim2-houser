import { Switch, Route } from 'react-router-dom';
import React from "react";
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';


export default (
    <div>
        <Switch>
            <Route path="/" exact component={Dashboard} ></Route>
            <Route path="/wizard" component={Wizard} ></Route>
            <Route component={NotFound} />
        </Switch>
    </div>
)

function NotFound() {
    return(
        <h1>404 Page Not Found</h1>
    )
}