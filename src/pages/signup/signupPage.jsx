import { Component } from "react";
import SignupForm from './signupForm'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as signupAction from "../../react-redux/action/signupAction";
import "./index.scss";
class SignupPage extends Component{
    render(){
        return(
            <div>
                singup page
                <div className="loginContent">
                <SignupForm signupAction={this.props.signupAction}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log('11',this.props)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signupAction:bindActionCreators(signupAction,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(SignupPage)