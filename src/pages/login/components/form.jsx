import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./form.scss";

const LoginForm = (props) => {

  const { loginAction, history, userInfo } = props;

  const icon = {
    color: "#c0c4cc",
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const login = () => {
    history.push("/firstItem");
  };

  const onFinish = (params) => {
    let formData = new FormData();
    formData.append("userName", params.userName);
    formData.append("passWord", params.passWord);
    loginAction.SET_LOGIN(formData, login);
  };

  return (
    <Form
      name="basic"
      initialValues={userInfo}
      size="large"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: "请输入用户名!",
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
            message: "请输入密码!",
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
};

LoginForm.propTypes = {
  userInfo: PropTypes.object,
  loginAction: PropTypes.object.isRequired,
};

export default withRouter(LoginForm);
