import {Component} from 'react'
import Nav from '../components/nav/nav'
import RouterView from '@/routes/routerView.jsx'
export default class AppHome extends Component{
    render(){
        return(
           <>
            <h1>布局页</h1>
            <Nav/>
            <RouterView routes={this.props.routes}/>
           </>
        )
    }
}

