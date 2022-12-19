import React, { useEffect, useState } from "react";
import { Col, Form, FormInstance, Input, Select } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchCompanies } from "../services/fetchCompanies";

const { Option } = Select;

interface ICompany {
  _id: string;
  name: string;
}

interface props {
  form: FormInstance;
}

export const ContractForm: React.FC<props> = ({ form }) => {
  const token = useSelector(
    (state: RootState) => state.api.headers.Authorization
  );

  const [companies, setCompanies] = useState<Array<ICompany>>([]);

  useEffect(() => {
    async function getData() {
      const companiesD = await fetchCompanies(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlZTdlNGFkZTJhYjdkMDk4YmUzNiIsImlhdCI6MTY3MTQ4NjY3OCwiZXhwIjoxNjcxNTczMDc4fQ.91J-x142atgDa1FUKLGhZqvQF3J4zg2WZtEqyd62YPA"
      );
      setCompanies(companiesD);
    }
    getData();
  }, [token]);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const RowS = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      width: 100% !important;
      & > .ant-col {
        flex: 100% 0 0 !important;
      }
    }
  `;

  return (
    <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
      <RowS id="contractForm">
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select a option and change input text above"
              onChange={(e) => console.log(e.target.value)}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item name="state" label="State" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={(e) => console.log(e.target.value)}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item name="city" label="City">
            <Input />
          </Form.Item>
        </Col>
      </RowS>
      <RowS>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="document_number"
            label="Document Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col style={{ flex: "65% 0 1" }}>
          <Form.Item
            name="social_reason"
            label="Social Reason"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </RowS>
      <RowS>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="district"
            label="District"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="address_number"
            label="Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </RowS>
      <RowS>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="zip_code"
            label="Zip code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
        </Col>
      </RowS>
      <RowS style={{ width: "65%" }}>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="start_date"
            label="Start Date"
            rules={[{ required: true }]}
          >
            <Input type="date" />
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="end_date"
            label="Ends Date"
            rules={[{ required: true }]}
          >
            <Input type="date" />
          </Form.Item>
        </Col>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="due_day"
            label="Due day"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select a option and change input text above"
              onChange={(e) => console.log(e.target.value)}
              allowClear
            >
              {new Array(30).fill(undefined).map((e, index) => {
                return (
                  <Option value={index + 1} key={index}>
                    {index + 1}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
      </RowS>
      <RowS>
        <Col style={{ flex: "30% 0 1" }}>
          <Form.Item
            name="company"
            label="Select a company"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select a option and change input text above"
              onChange={(e) => console.log(e.target.value)}
              allowClear
            >
              {companies?.map((e, index) => {
                return (
                  <Option value={e._id} key={index}>
                    {e.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
      </RowS>
    </Form>
  );
};
