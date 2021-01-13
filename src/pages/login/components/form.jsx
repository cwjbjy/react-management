/*
 * @description: 登录表单
 */
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { saveCookie } from "@/utils/cookie.js";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import './form.scss'
function LoginForm(props) {
  let icon = {
    color: "#c0c4cc",
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (params) => {
    let formData = new FormData();
    formData.append("userName", params.userName);
    formData.append("passWord", params.passWord);
    props.loginAction
      .login(formData)
      .then((res) => {
        saveCookie("token", res.value);
        saveCookie("auth", res.auth);
        props.history.push('/firstItem')
      })
      .catch((err) => {
        if (err.status === 400) {
          message.error({
            content: "密码错误",
            className: "custom-message",
          });
        } else if (err.status === 401) {
          message.error({
            content: "用户名错误",
            className: "custom-message",
          });
        }
      });
  };
  return (
    <Form
      name="basic"
      initialValues={props.userInfo}
      size="large"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: "Please input your username!",
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
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined style={{ color: icon.color }} />}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="formButton">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

LoginForm.propTypes={
    userInfo:PropTypes.object,
    loginAction:PropTypes.object.isRequired
}

export default withRouter(LoginForm);
