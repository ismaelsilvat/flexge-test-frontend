import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { Contract } from "../util";
import { ICompany } from "../store/types/types";
import { useDispatch } from "react-redux";
import { handlePage } from "../store/api/conf";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ContractEdt {
  _id: String;
  country: String;
  state: String;
  city: String;
  document_number: Number;
  social_reason: String;
  address: String;
  district: String;
  address_number: Number;
  zip_code: Number;
  email: String;
  phone: String;
  start_date: Date;
  end_date: Date;
  due_day: Date;
  company: ICompany;
}

interface props {
  data: Contract[];
}

const columns: ColumnsType<ContractEdt> = [
  {
    title: "Document number",
    dataIndex: "document_number",
  },
  {
    title: "Social Reason",
    dataIndex: "social_reason",
  },
  {
    title: "Company",
    dataIndex: "company",
    render: (_, { company }) => <>{company.name}</>,
  },
];

export const ContractsTable: React.FC<props> = ({ data }) => {
  const dispatch = useDispatch();
  const [pageCurrent, setpageCurrent] = useState<string>("");
  const page = useSelector((state: RootState) => state.api.page);

  const pageChange = (e: TablePaginationConfig) => {
      setpageCurrent(value.toString());
    }
  };

  useEffect(() => {
    dispatch(handlePage(pageCurrent.toString()));
    dispatch({ type: "FETCH_CONTRACTS_REQUEST" });
  }, [dispatch, pageCurrent]);

  return (
    <>
      <Table
        style={{ overflow: "hidden", overflowX: "auto", minWidth: "100%" }}
        columns={columns}
        dataSource={data}
        rowKey="_id"
        size="middle"
        onChange={(e) => pageChange(e)}
        pagination={{
          defaultPageSize: 5,
          total: 50,
        }}
      />
    </>
  );
};
