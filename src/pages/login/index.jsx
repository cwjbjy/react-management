import LoginForm from "./components/form";
import LoginOther from "./components/third";
import RegisterForm from "./components/register";
import { useDispatch, useSelector } from "react-redux";
import {SET_LOGIN,ADD_USER,SET_USER} from "@/redux/action/login";
import { Fragment } from "react";
import "./index.scss";
import { useEffect } from "react";

const Login = () => {

  const login = useSelector(state=>state.login)
  const dispatch = useDispatch()

  const onTab = () => {
    dispatch(SET_USER({
      flag: !login.flag,
    }));
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
              className={`${login.flag && "title_active"} tab_title`}
              onClick={onTab}
            >
              用户登录
            </div>
            <div
              className={`${!login.flag && "title_active"} tab_title`}
              onClick={onTab}
            >
              用户注册
            </div>
          </div>
          {login.flag ? (
            <Fragment>
              <LoginForm
                userInfo={login}
                SET_LOGIN={SET_LOGIN}
              ></LoginForm>
              <LoginOther></LoginOther>
            </Fragment>
          ) : (
            <RegisterForm ADD_USER={ADD_USER}></RegisterForm>
          )}
        </div>
      </main>
    </div>
  );
};

export default Login;
