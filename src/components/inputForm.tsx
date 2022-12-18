import React from "react";
import { Button, Form, Input } from "antd";
import { useLogin } from "../services/useLogin";
import { useUserContext } from "../context/User";

export const InputForm: React.FC = () => {
  const { handleSetUserData } = useUserContext();

  const OnFinish = async (values: any) => {
    const fetchData = await useLogin(values);
    handleSetUserData(fetchData.user, fetchData.token);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      onFinish={OnFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};
