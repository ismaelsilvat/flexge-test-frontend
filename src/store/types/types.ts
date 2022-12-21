import { contractsTypes } from "../Actiontypes/contractsTypes";

export interface Contract {
  _id: string;
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

export interface Contract2 {
  _id: string;
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
  company: ICompany[];
}

export interface ICompany {
  _id: string;
  name: string;
}

export interface ContractsState {
  pending: boolean;
  contracts: Contract[];
  error: string | null;
}

export interface FetchContractsSuccessPayload {
  contracts: Contract[];
}

export interface FetchContractsFailurePayload {
  error: string;
}

export interface FetchContractsRequest {
  type: typeof contractsTypes.FETCH_CONTRACTS_REQUEST;
}

export type FetchContractsSuccess = {
  type: typeof contractsTypes.FETCH_CONTRACTS_SUCCESS;
  payload: FetchContractsSuccessPayload;
};

export type FetchContractsFailure = {
  type: typeof contractsTypes.FETCH_CONTRACTS_FAILURE;
  payload: FetchContractsFailurePayload;
};

export type ContractsActions =
  | FetchContractsRequest
  | FetchContractsSuccess
  | FetchContractsFailure;
