import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./form.scss";
import { useDispatch } from "react-redux";
import API from '@/service/index'
import { saveCookie } from "@/utils/cookie.js";
import { img_url } from "@/service/lib/baseUrl.js";
const LoginForm = (props) => {
  const dispatch = useDispatch();

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
    API.login(formData)
      .then((res) => {
        dispatch(
          SET_USER({
            userName: params.userName,
            passWord: params.passWord,
          })
        );
        saveCookie("token", res.value);
        localStorage.setItem("menu", res.auth);
        API.getImage({ user_name: params.userName }).then((res) => {
          let fileName = res.Data[0]?.photo;
          let imgURL = `${img_url}${fileName}`;
          localStorage.setItem('imgUrl',imgURL)
          login()
        });
      })
      .catch((err) => {
        if (err.status === 400) {
          form.setFields([
            {
              name:'passWord',
              errors:["密码错误"]
            }
          ])
        } else if (err.status === 401) {
          form.setFields([
            {
              name:'userName',
              errors:["用户名错误"]
            }
          ])
        }
      });
  };

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
