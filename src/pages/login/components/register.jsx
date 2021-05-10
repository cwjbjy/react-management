import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { rules } from "@/utils/rules.js";
import { message } from "antd";
import { getTime } from "@/utils/comFunc";
import PropTypes from "prop-types";
import "./register.scss";
import { useEffect, useState } from "react/cjs/react.development";

const RegisterForm = (props) => {

  const { loginAction } = props;
  const [verifyCode, set_verifyCode] = useState(null);

  const icon = {
    color: "#c0c4cc",
  };

  useEffect(() => {
    set_verifyCode(new window.GVerify("v_container"));
  }, []);

  const onFinish = async (params) => {
    if (params.authCode && verifyCode.validate(params.authCode)) {
      await rules.isValidPass(params.rge_pass);
      await rules.equal(params.rge_pass, params.rge_passAgain);
      let user = {
        userName: params.reg_name,
        passWord: params.rge_pass,
        authority: 2,
        createTime: getTime(),
        photo: "userlogo.png",
      };
      loginAction.ADD_USER(user);
    } else {
      message.error({
        content: "验证码错误",
        className: "custom-message",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      size="large"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="reg_name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          placeholder="请输入用户名"
          prefix={<UserOutlined style={{ color: icon.color }} />}
        />
      </Form.Item>

      <Form.Item
        name="rge_pass"
        rules={[
          {
            required: true,
            message: "Please input your password!",
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
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="请再次输入密码"
          prefix={<LockOutlined style={{ color: icon.color }} />}
        />
      </Form.Item>

      <Form.Item name="authCode">
        <div className="verification_class">
          <Input placeholder="验证码区分大小写" />
          <div
            id="v_container"
            style={{ width: 200, height: 40, marginLeft: 10 }}
          ></div>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="formButton">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

RegisterForm.propTypes = {
  loginAction: PropTypes.object.isRequired,
};

export default RegisterForm;
