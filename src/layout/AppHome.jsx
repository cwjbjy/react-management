import {Component} from 'react'
import Nav from '../components/nav/nav'
import RouteView from '@/routes/routeView.jsx'
export default class AppHome extends Component{
    render(){
        return(
           <>
            <h1>布局页</h1>
            <Nav/>
            <RouteView routes={this.props.routes}/>
           </>
        )
    }
}

