import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { Contract } from "../util";
import { ICompany } from "../store/types/types";
import { useDispatch } from "react-redux";
import { handlePage } from "../store/api/conf";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { api } from "../config/axios";

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
  const token = useSelector(
    (state: RootState) => state.api.headers.Authorization
  );

  const [contractsTotal, setContractsTotal] = useState([]);

  const pageChange = (e: TablePaginationConfig) => {
    if (e.current === undefined) return;
    const value = e.current;
    setpageCurrent(value.toString());
  };

  useEffect(() => {
    async function getData() {
      const fetch = await api.get("/auth/contracts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContractsTotal(fetch.data);
    }

    getData();

    dispatch(handlePage(pageCurrent));
    dispatch({ type: "FETCH_CONTRACTS_REQUEST" });
  }, [dispatch, pageCurrent, token]);

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
          pageSize: 5,
          total: contractsTotal.length,
          pageSizeOptions: ['5']
        }}
      />
    </>
  );
};
