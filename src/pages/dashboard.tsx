import { Breadcrumb, Col, Row, Typography, Divider } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import React from "react";
import { HeaderC } from "../components";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <HeaderC />
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          height: "calc(100vh - 64px)",
          marginTop: "auto",
        }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Contracts</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            background: "#fff",
            minHeight: "70%",
          }}
        >
          <Row style={{ justifyContent: "space-between" }}>
            <Col>
              <Title level={4}>Contracts</Title>
            </Col>
            <Col
              style={{
                textAlign: "right",
                border: "2px solid black",
                display: "flex",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <a href="/contract" style={{ color: "var(--colorPrimary)" }}>
                + New Contract
              </a>
            </Col>
          </Row>
          <Divider />
        </div>
      </Content>
    </Layout>
  );
};
