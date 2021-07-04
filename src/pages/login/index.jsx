import LoginForm from "./components/form";
import LoginOther from "./components/third";
import RegisterForm from "./components/register";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, SET_USER } from "@/redux/action/login";
import { Helmet } from "react-helmet";
import { Container, Header,Main,Form } from "@/components/layout/login.jsx";
import cn from "classnames";
import { useEffect } from "react";
import {removeCookie} from '@/utils/cookie'

const theme= {
  background:'rgba(25, 202, 173, 1)',
}

const Login = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(()=>{
    removeCookie('token')
  },[])

  const onTab = () => {
    dispatch(
      SET_USER({
        flag: !login.flag,
      })
    );
  };

  return (
    <>
      <Helmet>
        <title>登录</title>
      </Helmet>
      <Container theme={theme}>
        <Header>PC端管理系统(React版)</Header>
        <Main>
          <Form>
            <div className="tab">
              <div
                className={cn({ title_active: login.flag }, "tab_title")}
                onClick={onTab}
              >
                用户登录
              </div>
              <div
                className={cn({ title_active: !login.flag }, "tab_title")}
                onClick={onTab}
              >
                用户注册
              </div>
            </div>
            {login.flag ? (
              <>
                <LoginForm userInfo={login} SET_USER={SET_USER}></LoginForm>
                <LoginOther></LoginOther>
              </>
            ) : (
              <RegisterForm ADD_USER={ADD_USER}></RegisterForm>
            )}
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default Login;
