import { Form, Input } from "antd";
import React from "react";

interface Props {
  getPass(val: string): void;
}

const PassChange: React.FC<Props> = ({ getPass }) => {
  const onPassword = (e: any) => {
    getPass(e.target.value);
  };

  return (
    <Form name="basic">
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password onChange={onPassword} />
      </Form.Item>
    </Form>
  );
};

export default React.memo(PassChange);
