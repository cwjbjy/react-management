import LoginForm from "./components/form";
import LoginOther from "./components/third";
import RegisterForm from "./components/register";
import { Helmet } from "react-helmet";
import { Container, Header, Main, Form } from "@/components/layout/login.jsx";
import { useEffect } from "react";
import { useRequest, useLocalStorageState } from "ahooks";
import { getData } from "@/apis/user.js";
import cn from "classnames";
import clearInfo from "@/utils/clearInfo.js";
import produce from "immer";

const initState = {
  userName: "一叶扁舟",
  passWord: "123456zx",
  flag: true,
};

const Login = () => {
  const [userInfo, setUser] = useLocalStorageState("userInfo", initState);

  useRequest(getData);

  useEffect(() => {
    clearInfo();
  }, []);

  const onTab = () => {
    setUser((prev) =>
      produce(prev, (draft) => {
        draft.flag = !prev.flag;
      })
    );
  };

  return (
    <>
      <Helmet>
        <title>登录</title>
      </Helmet>
      <Container>
        <Header>PC端管理系统(React版)</Header>
        <Main>
          <Form>
            <div className="tab">
              <div
                className={cn({ title_active: userInfo.flag }, "tab_title")}
                onClick={onTab}
              >
                用户登录
              </div>
              <div
                className={cn({ title_active: !userInfo.flag }, "tab_title")}
                onClick={onTab}
              >
                用户注册
              </div>
            </div>
            {userInfo.flag ? (
              <>
                <LoginForm userInfo={userInfo} setUser={setUser}></LoginForm>
                <LoginOther></LoginOther>
              </>
            ) : (
              <RegisterForm setUser={setUser}></RegisterForm>
            )}
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default Login;
