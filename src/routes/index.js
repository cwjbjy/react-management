import React from "react";
import { Route,Switch } from "react-router-dom";
import Login from '../pages/login/login.jsx'

import AppHome from "../layout/AppHome.jsx";

export default (
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={AppHome}></Route>
    </Switch>
)