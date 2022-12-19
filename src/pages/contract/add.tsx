import { Breadcrumb, Col, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContractForm, HeaderC } from "../../components";

const { Title } = Typography;

export const NewContract: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = (target: string) => () => navigate(target);

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
          <Breadcrumb.Item>
            <strong>Create Contract</strong>
          </Breadcrumb.Item>
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
              <Title level={4}>Create Contract</Title>
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
              <div
                style={{ color: "var(--colorPrimary)", cursor: "pointer" }}
                onClick={navigateTo("/")}
              >
                <strong>{"<- Back"}</strong>
              </div>
            </Col>
          </Row>
          <Divider />
          <ContractForm />
        </div>
      </Content>
    </Layout>
  );
};
