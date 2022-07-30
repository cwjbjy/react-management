import React, { Dispatch } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { set } from 'local-storage';
import { useRequest, useKeyPress } from 'ahooks';
import produce from 'immer';
import styled from 'styled-components';
import { saveCookie } from '@/utils/cookie.js';
import API from '@/apis';

interface Props {
  setUser: Dispatch<React.SetStateAction<any>>;
  userInfo: UserInfo;
}

const icon = {
  color: '#c0c4cc',
};

const LoginForm: React.FC<Props> = ({ setUser, userInfo }) => {
  const history = useHistory();

  const [form] = Form.useForm();

  const { run, loading } = useRequest(API.login, {
    manual: true,
    onSuccess: async (data: Record<string, any>, params) => {
      await saveCookie('token', data.value);
      set('menu', data.auth);
      setUser(
        produce((draft: UserInfo) => {
          draft.userName = params[0].get('userName');
          draft.passWord = params[0].get('passWord');
          draft.flag = true;
        }),
      );
      history.push('/home/firstItem');
    },
    onError: (error: Record<string, any>) => {
      if (error.status === 400) {
        form.setFields([
          {
            name: 'passWord',
            errors: ['密码错误'],
          },
        ]);
      } else if (error.status === 401) {
        form.setFields([
          {
            name: 'userName',
            errors: ['用户名错误'],
          },
        ]);
      }
    },
  });

  const onFinish = (params: UserInfo) => {
    let formData = new FormData();
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
};

export default React.memo(LoginForm);

export const FormButton = styled(Button)`
  width: 100%;
`;
