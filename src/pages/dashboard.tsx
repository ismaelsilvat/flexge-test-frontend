import { Breadcrumb, Col, Row, Typography, Divider } from "antd";
import Layout, { Content } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderC } from "../components";
import { RootState } from "../store";
import { Contract } from "../util";

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  const dispath = useDispatch();

  const contracts = useSelector(
    (state: RootState) => state.rootReducer.contracts.items
  );

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
              <div
                style={{ color: "var(--colorPrimary)", cursor: "pointer" }}
                onClick={navigateTo("/contract/add")}
              >
                + New Contract
              </div>
            </Col>
          </Row>
          <Divider />
          <Row>
            {contracts.map((e: Contract) => {
              return <div>{e._id}</div>;
            })}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
