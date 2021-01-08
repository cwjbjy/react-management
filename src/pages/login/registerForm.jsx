import {Component} from 'react'
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
export default class RegisterForm extends Component{
    constructor(){
        super()
        this.state={
            verifyCode:null
        }
    }
    componentDidMount(){
        this.setState({
            verifyCode:new window.GVerify("v_container")
        })
    }
    render() {
        const onFinish = (params) => {
          console.log("Success:", params);
          console.log(this.state.verifyCode.validate(params.authCode))
        //   this.props.signupAction.getContactList().then(res=>{
        //       console.log(res)
        //   })
        };
    
        const onFinishFailed = (errorInfo) => {
          console.log("Failed:", errorInfo);
        };

        let icon={
            color:'#c0c4cc'
        }
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
              <Input placeholder="请输入用户名" prefix={<UserOutlined style={{color:icon.color}} />}/>
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
              <Input.Password placeholder="请输入8-16位由数字与字母组成的密码" prefix={<LockOutlined style={{color:icon.color}} />}/>
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
              <Input.Password placeholder="请再次输入密码" prefix={<LockOutlined style={{color:icon.color}} />}/>
            </Form.Item>

            <Form.Item name="authCode">
                <div className="verification_class">
                <Input placeholder="请输入验证码" />
                <div id="v_container" style={{width: 200,height: 40,marginLeft:10}}></div>
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