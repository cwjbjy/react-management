import {Component} from 'react'
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
export default class RegisterForm extends Component{
    constructor(){
        super()
        this.state={
            verifyCode:null,
            reg_name:'',
            rge_pass:'',
            rge_passAgain:''
        }
    }
    componentDidMount(){
        this.setState({
            verifyCode:new window.GVerify("v_container")
        })
    }
    nameChange = (e)=>{
        this.setState({
            reg_name:e.target.value
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

        let {reg_name,rge_pass,rge_passAgain} = this.state
        return (
          <Form
            name="basic"
            size="large"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="reg_name"
            >
              <Input placeholder="请输入用户名" value={reg_name} onChange={this.nameChange} prefix={<UserOutlined style={{color:icon.color}} />}/>
            </Form.Item>
    
            <Form.Item
              name="rge_pass"
            >
              <Input.Password placeholder="请输入8-16位由数字与字母组成的密码" prefix={<LockOutlined style={{color:icon.color}} />}/>
            </Form.Item>
    
            <Form.Item
              name="rge_passAgain"
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