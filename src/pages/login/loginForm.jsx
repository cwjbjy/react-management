import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { saveCookie } from "@/utils/cookie.js";
export default function LoginForm(props) {
  let icon = {
    color: "#c0c4cc",
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (params) => {
    let formData = new FormData();
    formData.append('userName', params.userName);
    formData.append('passWord', params.passWord);
    props.loginAction.login(formData).then(res=>{
        saveCookie('token',res.value)
        saveCookie('auth',res.auth)
    })
  };
  return (
    <Form
      name="basic"
      initialValues={{
        userName: "一叶扁舟",
        passWord: "123456zx",
      }}
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
