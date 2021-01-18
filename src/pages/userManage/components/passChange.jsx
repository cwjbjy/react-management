import { Form, Input } from "antd";
import { useState } from "react";

const PassChange = (props) => {
  const [password, setPassword] = useState("");
  const onPassword = (e) => {
    setPassword(e.target.value);
    props.userAction.setPassword(e.target.value)
  };
  return (
    <Form name="basic">
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password value={password} onChange={onPassword} />
      </Form.Item>
    </Form>
  );
};

export default PassChange;
