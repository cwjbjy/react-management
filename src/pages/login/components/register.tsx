import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import produce from 'immer';
import { FormButton } from './form';
import { getTime } from '@/utils/comFunc';
import API from '@/apis';
import './register.scss';

interface Props {
  setUser: any;
}

const icon = {
  color: '#c0c4cc',
};

const RegisterForm: React.FC<Props> = ({ setUser }) => {
  const [verifyCode, set_verifyCode] = useState<any>(null);

  const { run } = useRequest(API.register, {
    manual: true,
    onSuccess: (data: any, params) => {
      message.success({
        content: data.message,
        className: 'custom-message',
      });
      setUser(
        produce((draft: UserInfo) => {
          draft.userName = params[0].userName;
          draft.passWord = params[0].passWord;
          draft.flag = true;
        }),
      );
    },
    onError: (error: any) => {
      if (error.status === 403) {
        message.error({
          content: '用户名已存在，请重新选择用户名',
          className: 'custom-message',
        });
      }
    },
  });

  useEffect(() => {
    set_verifyCode(new window.GVerify('v_container'));
  }, []);

  const onFinish = useCallback(
    (params) => {
      if (params.authCode && verifyCode.validate(params.authCode)) {
        const user = {
          userName: params.reg_name,
          passWord: params.rge_pass,
          authority: 2,
          createTime: getTime(),
          photo: 'userlogo.png',
        };
        run(user);
      } else {
        message.error({
          content: '验证码错误',
          className: 'custom-message',
        });
      }
    },
    [run, verifyCode],
  );

  return (
    <Form name="basic" size="large" onFinish={onFinish}>
      <Form.Item
        name="reg_name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="请输入用户名" prefix={<UserOutlined style={{ color: icon.color }} />} />
      </Form.Item>

      <Form.Item
        name="rge_pass"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
            message: '请输入8-16位由数字与字母组成的密码',
          },
        ]}
      >
        <Input.Password
          placeholder="请输入8-16位由数字与字母组成的密码"
          prefix={<LockOutlined style={{ color: icon.color }} />}
        />
      </Form.Item>

      <Form.Item
        name="rge_passAgain"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('rge_pass') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="请再次输入密码" prefix={<LockOutlined style={{ color: icon.color }} />} />
      </Form.Item>

      <Form.Item name="authCode">
        <div style={{ display: 'flex' }}>
          <Input placeholder="验证码区分大小写" />
          <div id="v_container" style={{ width: 200, height: 40, marginLeft: 10 }}></div>
        </div>
      </Form.Item>

      <Form.Item>
        <FormButton type="primary" htmlType="submit">
          注册
        </FormButton>
      </Form.Item>
    </Form>
  );
};

export default React.memo(RegisterForm);
