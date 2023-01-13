import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRequest, useKeyPress } from 'ahooks';
import { Form, Input, Button } from 'antd';
import produce from 'immer';
import * as ls from 'local-storage';
import { Dispatch, forwardRef, memo, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import API from '@/apis';
import { USER_MENU, ACCESS_TOKEN } from '@/config/constant';
import { CODE_NAME_PASS } from '@/config/returnCodeMap';

interface Props {
  setUser: Dispatch<React.SetStateAction<any>>;
  userInfo: UserInfo;
}

const icon = {
  color: '#c0c4cc',
};

const LoginForm = forwardRef(({ setUser, userInfo }: Props, ref) => {
  useImperativeHandle(ref, () => ({
    login: (params: any) => {
      console.log('params', params);
      run(params);
    },
  }));

  const history = useHistory();

  const [form] = Form.useForm();

  const { run, loading } = useRequest(API.login, {
    manual: true,
    onSuccess: (data: Record<string, any>, params) => {
      ls.set(ACCESS_TOKEN, data.data.token);
      ls.set(USER_MENU, data.data.auth);
      setUser(
        produce((draft: UserInfo) => {
          draft.userName = params[0].get('userName');
          draft.passWord = params[0].get('passWord');
        }),
      );
      history.push('/home/firstItem');
    },
    onError: (error: Record<string, any>) => {
      if (error.status === CODE_NAME_PASS) {
        form.setFields([
          {
            name: 'passWord',
            errors: ['用户名或密码错误'],
          },
        ]);
        form.setFields([
          {
            name: 'userName',
            errors: ['用户名或密码错误'],
          },
        ]);
      }
    },
  });

  const onFinish = (params: UserInfo) => {
    let formData = new URLSearchParams();
    formData.append('userName', params.userName);
    formData.append('passWord', params.passWord);
    run(formData);
  };

  useKeyPress('enter', () => {
    form.submit();
  });

  return (
    <Form name="basic" initialValues={userInfo} size="large" form={form} onFinish={onFinish}>
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input prefix={<UserOutlined style={{ color: icon.color }} />} />
      </Form.Item>

      <Form.Item
        name="passWord"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined style={{ color: icon.color }} />} />
      </Form.Item>

      <Form.Item>
        <FormButton type="primary" htmlType="submit" loading={loading}>
          登录
        </FormButton>
      </Form.Item>
    </Form>
  );
});

export default memo(LoginForm);

export const FormButton = styled(Button)`
  width: 100%;
`;
