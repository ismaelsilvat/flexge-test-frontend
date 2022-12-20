import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Layout,
  Row,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContractForm, HeaderC, ProductForm } from "../../components";
import { useProductsPost } from "../../services/useProductsPost";
import { IContract, useContractPost } from "../../services/useContractPost";
import { RootState } from "../../store";

const { Title } = Typography;

export const NewContract: React.FC = () => {
  const navigate = useNavigate();

  function navigateTo(target: string) {
    navigate(target);
  }

  // const token = useSelector(
  //   (state: RootState) => state.api.headers.Authorization
  // );

  const products = useSelector((state: RootState) => state.products.data);

  const [form] = useForm();
  const [resetField, setResetField] = useState<boolean>(true);

  useEffect(() => {
    function setFalse() {
      setResetField(false);
    }
    if (!!resetField) {
      setTimeout(setFalse, 500);
    }
  }, [resetField]);

  const SubmitFunction = async () => {
    form.submit();
    const contractData: IContract = form.getFieldsValue();
    const contractId = await useContractPost(
      contractData,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlZTdlNGFkZTJhYjdkMDk4YmUzNiIsImlhdCI6MTY3MTQ4NjY3OCwiZXhwIjoxNjcxNTczMDc4fQ.91J-x142atgDa1FUKLGhZqvQF3J4zg2WZtEqyd62YPA"
    );
    const productFetch = useProductsPost(
      products,
      contractId,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlZTdlNGFkZTJhYjdkMDk4YmUzNiIsImlhdCI6MTY3MTQ4NjY3OCwiZXhwIjoxNjcxNTczMDc4fQ.91J-x142atgDa1FUKLGhZqvQF3J4zg2WZtEqyd62YPA"
    );
    console.log(productFetch);

    if (productFetch.length !== 0) {
      form.resetFields();
      setResetField(true);
      navigateTo("/");
    }
  };

  return (
    <Layout>
      <HeaderC />
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          minHeight: "calc(100vh - 64px)",
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
                onClick={() => navigateTo("/")}
              >
                <strong>{"<- Back"}</strong>
              </div>
            </Col>
          </Row>
          <Divider />
          <ContractForm form={form} />
        </div>
        <div
          style={{
            marginTop: 32,
            padding: 24,
            background: "#fff",
          }}
        >
          <ProductForm resetField={resetField} />
        </div>
        <div
          style={{
            marginTop: 32,
            padding: 24,
            background: "#fff",
          }}
        >
          <Button
            onClick={() => {
              setResetField(true);
              form.resetFields();
            }}
          >
            Discard Changes
          </Button>
          <Button
            onClick={() => {
              SubmitFunction();
            }}
          >
            Create Contract
          </Button>
        </div>
      </Content>
    </Layout>
  );
};
