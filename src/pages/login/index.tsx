import { useEffect } from 'react';
import { useRequest, useLocalStorageState, useTitle } from 'ahooks';
import produce from 'immer';
import cn from 'classnames';
import LoginForm from './components/form';
import LoginOther from './components/third';
import RegisterForm from './components/register';
import { Container, Header, Main, Form } from '@/components/layout/login.jsx';
import { getToken } from '@/apis/token.js';
import clearInfo from '@/utils/clearInfo.js';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '@/config/constant.js';

const initState: any = {
  userName: '一叶扁舟',
  passWord: '123456zx',
  flag: true,
};

const Login = () => {
  useTitle('登录');

  const [userInfo, setUser] = useLocalStorageState<any>('userInfo', initState);

  const { run } = useRequest(getToken, {
    manual: true,
    onSuccess: (res: any) => {
      //存储长token
      localStorage.setItem(REFRESH_TOKEN, res.refreshToken);
      //存储短token
      localStorage.setItem(ACCESS_TOKEN, res.accessToken);
    },
  });

  useEffect(() => {
    run();
    clearInfo();
  }, [run]);

  const onTab = () => {
    setUser((prev: UserInfo) =>
      produce(prev, (draft: UserInfo) => {
        draft.flag = !prev.flag;
      }),
    );
  };

  return (
    <Container>
      <Header>PC端管理系统(React版)</Header>
      <Main>
        <Form>
          <div className="tab">
            <div className={cn({ title_active: userInfo.flag }, 'tab_title')} onClick={onTab}>
              用户登录
            </div>
            <div className={cn({ title_active: !userInfo.flag }, 'tab_title')} onClick={onTab}>
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
  );
};

export default Login;
