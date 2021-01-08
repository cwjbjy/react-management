import React from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import Login from '../pages/login/index.jsx'

import AppHome from "../layout/AppHome.jsx";

export default (
    <Switch>
         <Route path='/' exact render={()=> (
               <Redirect to='/login'/>
        )}/>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/home" component={AppHome}></Route>
    </Switch>
)