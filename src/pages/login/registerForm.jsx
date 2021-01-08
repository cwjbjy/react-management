import { Component } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { isValidPass } from "@/utils/rules.js";
import { message } from "antd";
import { getTime } from "@/utils/comFunc";
import PropTypes from 'prop-types'
export default class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      verifyCode: null,
      rge_pass: "",
      rge_passAgain: "",
      passStatus: null,
      passHelp: null,
      passAgainStatus: null,
      passAgainHelp: null,
    };
  }

  static propTypes={
    loginAction:PropTypes.object.isRequired,
    onRegister:PropTypes.func.isRequired
  }

  componentDidMount() {
    this.setState({
      verifyCode: new window.GVerify("v_container"),
    });
  }
  passChange = (e) => {
    this.setState({
      rge_pass: e.target.value,
    });
    if (isValidPass(e.target.value)) {
      this.setState({
        passStatus: "success",
        passHelp: null,
      });
    } else {
      this.setState({
        passStatus: "error",
        passHelp: "请输入8-16位由数字与字母组成的密码",
      });
    }
  };
  rge_passAgainChange = (e) => {
    this.setState({
      rge_passAgain: e.target.value,
    });
    if (e.target.value === this.state.rge_pass) {
      this.setState({
        passAgainStatus: "success",
        passAgainHelp: null,
      });
    } else {
      this.setState({
        passAgainStatus: "error",
        passAgainHelp: "两次输入密码不一致",
      });
    }
  };
  render() {
    let {
      rge_pass,
      rge_passAgain,
      passStatus,
      passHelp,
      passAgainStatus,
      passAgainHelp,
    } = this.state;

    const onFinish = (params) => {
      //   console.log("Success:", params);
      if (params.authCode) {
        if (this.state.verifyCode.validate(params.authCode)) {
          if (isValidPass(rge_pass)) {
            if (rge_pass === rge_passAgain) {
              let user = {
                userName: params.reg_name,
                passWord: params.rge_pass,
                authority: 2,
                createTime: getTime(),
                photo: "userlogo.png",
              };
              this.props.loginAction
                .register(user)
                .then((res) => {
                  message.success({
                    content: res.message,
                    className: "custom-message",
                  });
                  this.props.onRegister({
                    userName: params.reg_name,
                    passWord: params.rge_pass,
                    flag:true
                  });
                })
                .catch((err) => {
                  if (err.status === 403) {
                    message.error({
                      content: "用户名已存在，请重新选择用户名",
                      className: "custom-message",
                    });
                  }
                });
            } else {
              message.error({
                content: "两次输入密码不一致",
                className: "custom-message",
              });
            }
          } else {
            message.error({
              content: "密码错误",
              className: "custom-message",
            });
          }
        } else {
          message.error({
            content: "验证码错误",
            className: "custom-message",
          });
        }
      } else {
        message.error({
          content: "请输入验证码",
          className: "custom-message",
        });
      }
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    let icon = {
      color: "#c0c4cc",
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

        <Form.Item name="rge_pass" validateStatus={passStatus} help={passHelp}>
          <Input.Password
            value={rge_pass}
            onChange={this.passChange}
            placeholder="请输入8-16位由数字与字母组成的密码"
            prefix={<LockOutlined style={{ color: icon.color }} />}
          />
        </Form.Item>

        <Form.Item
          name="rge_passAgain"
          validateStatus={passAgainStatus}
          help={passAgainHelp}
        >
          <Input.Password
            value={rge_passAgain}
            onChange={this.rge_passAgainChange}
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
  }
}
