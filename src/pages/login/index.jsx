import LoginForm from "./components/form";
import LoginOther from "./components/third";
import RegisterForm from "./components/register";
import { Helmet } from "react-helmet";
import { Container, Header,Main,Form } from "@/components/layout/login.jsx";
import cn from "classnames";
import { useEffect } from "react";
import clearInfo from '@/utils/clearInfo.js'
import {useLocalStorageState} from 'ahooks'

const theme= {
  background:'rgba(25, 202, 173, 1)',
}

const initState = {
  userName: '一叶扁舟',
  passWord: '123456zx',
  flag: true
}

const Login = () => {

  const [user,setUser] = useLocalStorageState('userInfo',initState)

  useEffect(()=>{
    clearInfo()
  },[])

  const onTab = () => {
    setUser({...user,flag:!user.flag})
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
                className={cn({ title_active: user.flag }, "tab_title")}
                onClick={onTab}
              >
                用户登录
              </div>
              <div
                className={cn({ title_active: !user.flag }, "tab_title")}
                onClick={onTab}
              >
                用户注册
              </div>
            </div>
            {user.flag ? (
              <>
                <LoginForm userInfo={user} SET_USER={setUser}></LoginForm>
                <LoginOther></LoginOther>
              </>
            ) : (
              <RegisterForm SET_USER={setUser}></RegisterForm>
            )}
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default Login;
