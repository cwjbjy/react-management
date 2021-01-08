import LoginForm from "./loginForm";
import LoginOther from "./loginOther";
import RegisterForm from './registerForm'
import "./login.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "@/react-redux/action/loginAction"

function Login(props) {

  /* 注册完成后回调 */
  const onRegister=(params)=>{
    props.loginAction.SET_FLAG({
      flag:params.flag,
      userName:params.userName,
      passWord:params.passWord
    })
  }

  /* 切换tab */
  const tabActive = () => {
    props.loginAction.SET_FLAG({
      flag:!props.login.flag,
      userName:props.login.userName,
      passWord:props.login.passWord
    })
  };

  let  flag  = props.login.flag;
  
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
              onClick={tabActive}
            >
              用户登录
            </div>
            <div
              className={`${!flag ? "title_active" : ""} tab_title`}
              onClick={tabActive}
            >
              用户注册
            </div>
          </div>
          {flag ? (
            <>
              <LoginForm userInfo={props.login} loginAction={props.loginAction}></LoginForm>
              <LoginOther></LoginOther>
            </>
          ) : (
            <RegisterForm loginAction={props.loginAction} onRegister={onRegister}></RegisterForm>
          )}
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return state
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loginAction:bindActionCreators(loginAction,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)