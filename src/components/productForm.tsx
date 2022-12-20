import React, { useEffect } from "react";
import { Button, Col, Form, Input, Select } from "antd";
import styled from "styled-components";
import { ProductsTable } from "./productsTable";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { addProduct, removeAll } from "../store/contract/add/products";

const { Option } = Select;

interface props {
  resetField: boolean;
}

export const ProductForm: React.FC<props> = ({ resetField }) => {
  const [form] = useForm();
  const products = useSelector((state: RootState) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!resetField) return;
    form.resetFields();
    dispatch(removeAll());
  }, [dispatch, form, resetField]);

  const RowS = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;

    @media screen and (max-width: 1024px) {
      width: 100% !important;
      & > .ant-col,
      .ant-row.ant-form-item-row {
        flex: 100% 0 0 !important;
        display: flex;
        flex-direction: column;
      }
    }
  `;

  const addProductClick = () => {
    const values = form.getFieldsValue();
    dispatch(addProduct(values));
    form.resetFields();
  };

  return (
    <>
      <Form form={form}>
        <RowS>
          <Col style={{ flex: "12% 0 1" }}>
            <Form.Item name="name" label="Product" rules={[{ required: true }]}>
              <Select
                style={{ width: "100%" }}
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value={"Licenças por pacote"} key={12}>
                  Licenças por pacote
                </Option>
                <Option value={"Licenças extras"} key={22}>
                  Licenças extras
                </Option>
                <Option value={"Placement Test Comercial"} key={32}>
                  Placement Test Comercial
                </Option>
                <Option value={"Assesoria de implantação"} key={42}>
                  Assesoria de implantação
                </Option>
                <Option value={"White Label"} key={52}>
                  White label
                </Option>
                <Option value={"Taxa de atualização de sistema"} key={62}>
                  Taxa de atualização de sistema
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col style={{ flex: "12% 0 1" }}>
            <Form.Item name="amount" label="Amount">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col style={{ flex: "12% 0 1" }}>
            <Form.Item
              name="unitprice"
              label="Final unit price"
              rules={[{ required: true }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col style={{ flex: "12% 0 1" }}>
            <Form.Item name="installments" label="Installments">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col style={{ flex: "12% 0 1" }}>
            <Form.Item name="paid_installments" label="Paid Installments">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col style={{ flex: "12% 0 1" }}>
            <Form.Item name="beginning_term_date" label="Beginning of Term">
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col
            style={{
              flex: "12% 0 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Form.Item colon={false}>
              <Button htmlType="button" onClick={addProductClick}>
                + Add
              </Button>
            </Form.Item>
          </Col>
        </RowS>
      </Form>
      <RowS>
        <ProductsTable data={products} />
      </RowS>
    </>
  );
};
