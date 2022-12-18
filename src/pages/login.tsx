import { Layout } from "antd";
import React from "react";
import { InputForm } from "../components";

export const Login: React.FC = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <InputForm />
    </Layout>
  );
};
