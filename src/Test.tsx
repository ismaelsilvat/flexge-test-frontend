import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Typography, theme } from "antd";
import "antd/dist/reset.css";

const { useToken } = theme;
const { Title } = Typography

export const TitleComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Title level={2} style={{ color: token.colorPrimary }}>
      oi
    </Title>
  );
};
