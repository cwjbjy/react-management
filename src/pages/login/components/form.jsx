import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./form.scss";
import API from "@/service/index";
import { saveCookie } from "@/utils/cookie.js";
import { useRequest } from "ahooks";

const LoginForm = (props) => {
  const { SET_USER, history, userInfo } = props;

  const icon = {
    color: "#c0c4cc",
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const login = () => {
    history.push("/home/firstItem");
  };

  const [form] = Form.useForm();

  const onFinish = (params) => {
    let formData = new FormData();
    formData.append("userName", params.userName);
    formData.append("passWord", params.passWord);
    run(formData);
  };

  const { run } = useRequest(API.login, {
    manual: true,
    throwOnError: true, //自己处理错误
    onSuccess: (data, params) => {
      saveCookie("token", data.value);
      localStorage.setItem("menu", data.auth);
      SET_USER(
        Object.assign(
          {},
          {
            userName: params[0].get("userName"),
            passWord: params[0].get("passWord"),
            flag: true,
          }
        )
      );
      login();
    },
    onError: (error) => {
      if (error.status === 400) {
        form.setFields([
          {
            name: "passWord",
            errors: ["密码错误"],
          },
        ]);
      } else if (error.status === 401) {
        form.setFields([
          {
            name: "userName",
            errors: ["用户名错误"],
          },
        ]);
      }
    },
  });

  return (
    <Form
      name="basic"
      initialValues={userInfo}
      size="large"
      form={form}
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
  SET_LOGIN: PropTypes.func,
};

export default withRouter(LoginForm);
