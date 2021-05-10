import LoginForm from "./components/form";
import LoginOther from "./components/third";
import RegisterForm from "./components/register";
import "./index.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "@/redux/action/login";
import { Fragment } from "react";

const Login = (props) => {
  let { login, loginAction } = props;
  const onTab = () => {
    loginAction.SET_USER({
      flag: !props.login.flag,
      userName: props.login.userName,
      passWord: props.login.passWord,
    });
  };
  return (
    <div className="login">
      <header>
        <span className="login_title">PC端管理系统(React版)</span>
      </header>
      <main>
        <div className="form">
          <div className="tab">
            <div
              className={`${login.flag ? "title_active" : ""} tab_title`}
              onClick={onTab}
            >
              用户登录
            </div>
            <div
              className={`${!login.flag ? "title_active" : ""} tab_title`}
              onClick={onTab}
            >
              用户注册
            </div>
          </div>
          {login.flag ? (
            <Fragment>
              <LoginForm
                userInfo={login}
                loginAction={loginAction}
              ></LoginForm>
              <LoginOther></LoginOther>
            </Fragment>
          ) : (
            <RegisterForm loginAction={loginAction}></RegisterForm>
          )}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: bindActionCreators(loginAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
