import { Form, Input } from "antd";

const PassChange = (props) => {

  const onPassword = (e) => {
    props.getPass(e.target.value)
  };
  
  return (
    <Form name="basic">
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password  onChange={onPassword} />
      </Form.Item>
    </Form>
  );
};

export default PassChange;
