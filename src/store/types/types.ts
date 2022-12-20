import { IContract } from "../../services/useContractPost";
import { contractsTypes } from "../Actiontypes/contractsTypes";

export interface Contract extends IContract {
  _id: string;
}

export interface ContractsState {
  pending: boolean;
  Contracts: Contract[];
  error: string | null;
}

export interface FetchContractsSuccessPayload {
  Contracts: Contract[];
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
