import { Component } from "react";
import LoginForm from "./loginForm";
import LoginOther from "./loginOther";
import RegisterForm from './registerForm'
import "./login.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "@/react-redux/action/loginAction"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  render() {
    let { flag } = this.state;
    return (
      <div className="login">
        <header>
          <span className="login_title">PC端管理系统(React版)</span>
        </header>
        <main>
          <div className="form">
            <div className="tab">
              <div
                className={`${flag ? "title_active" : ""} tab_title`}
                onClick={this.tabActive}
              >
                用户登录
              </div>
              <div
                className={`${!flag ? "title_active" : ""} tab_title`}
                onClick={this.tabActive}
              >
                用户注册
              </div>
            </div>
            {flag ? (
              <>
                <LoginForm loginAction={this.props.loginAction}></LoginForm>
                <LoginOther></LoginOther>
              </>
            ) : (
              <RegisterForm></RegisterForm>
            )}
          </div>
        </main>
      </div>
    );
  }
  tabActive = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loginAction:bindActionCreators(loginAction,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(Login)