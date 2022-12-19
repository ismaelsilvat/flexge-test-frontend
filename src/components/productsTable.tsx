import React, { ReactElement } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  name: string;
  amount: Number;
  installments: Number;
  paid_installments: Number;
  beginning_term_date: Date;
  actions?: ReactElement<any, any>;
}

interface props {
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Product",
    dataIndex: "name",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Installments",
    dataIndex: "installments",
  },
  {
    title: "Paid Installments",
    dataIndex: "paid_installments",
  },
  {
    title: "Beginning of the Term",
    dataIndex: "beginning_term_date",
  },
];

export const ProductsTable: React.FC<props> = ({ data }) => {
  return (
    <>
      <Table
        style={{ overflow: "hidden", overflowX: "auto", minWidth: "100%" }}
        columns={columns}
        dataSource={data}
        size="middle"
      />
    </>
  );
};
