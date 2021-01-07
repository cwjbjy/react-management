import {Component} from 'react'
import { Route,Switch } from "react-router-dom";
import Nav from '../components/nav/nav'
import SignupPage from '../pages/signup/signupPage.jsx';
export default class AppHome extends Component{
    render(){
        return(
           <>
            <h1>布局页</h1>
            <Nav/>
            <Switch>
              <Route exact path="/home/signup" component={SignupPage}></Route>
            </Switch>
            {this.props.children}
           </>
        )
    }
}

