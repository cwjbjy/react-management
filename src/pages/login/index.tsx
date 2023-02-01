import { useLocalStorageState, useTitle } from 'ahooks';
import cn from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';

import LoginForm from './components/form';
import RegisterForm from './components/register';
import LoginOther from './components/third';
import { Container, Header, Main, Form } from '@/components/layout/login.jsx';

import { USER_INFO } from '@/config/constant.js';
import clearInfo from '@/utils/clearInfo.js';

interface ForwardObject {
  login: (params: URLSearchParams) => void;
}

const Login = () => {
  useTitle('登录');

  const [userInfo, setUser] = useLocalStorageState(USER_INFO, {
    defaultValue: { userName: '一叶扁舟', passWord: '123456zx' },
  });

  const [flag, setFlag] = useState(true);
  const loginRef = useRef<ForwardObject>();

  useEffect(() => {
    clearInfo();
  }, []);

  const onTab = useCallback(() => {
    setFlag((prev) => !prev);
  }, []);

  const onRegister = useCallback((params) => {
    let formData = new URLSearchParams();
    formData.append('userName', params.userName);
    formData.append('passWord', params.passWord);
    loginRef.current?.login(formData);
  }, []);

  return (
    <Container>
      <Header>PC端管理系统(React版)</Header>
      <Main>
        <Form>
          <div className="tab">
            <div className={cn({ title_active: flag }, 'tab_title')} onClick={onTab}>
              用户登录
            </div>
            <div className={cn({ title_active: !flag }, 'tab_title')} onClick={onTab}>
              用户注册
            </div>
          </div>
          <div style={{ display: flag ? '' : 'none' }}>
            <LoginForm userInfo={userInfo} setUser={setUser} ref={loginRef}></LoginForm>
            <LoginOther></LoginOther>
          </div>
          <div style={{ display: !flag ? '' : 'none' }}>
            <RegisterForm setUser={setUser} onRegister={onRegister}></RegisterForm>
          </div>
        </Form>
      </Main>
    </Container>
  );
};

export default Login;
