import { contractsTypes } from "../Actiontypes/contractsTypes";
import {
  FetchContractsFailure,
  FetchContractsFailurePayload,
  FetchContractsRequest,
  FetchContractsSuccess,
  FetchContractsSuccessPayload,
} from "../types/types";

export const fetchContractsRequest = (): FetchContractsRequest => ({
  type: contractsTypes.FETCH_CONTRACTS_REQUEST,
});

export const fetchContractsSuccess = (
  payload: FetchContractsSuccessPayload
): FetchContractsSuccess => ({
  type: contractsTypes.FETCH_CONTRACTS_SUCCESS,
  payload,
});

export const fetchContractsFailure = (
  payload: FetchContractsFailurePayload
): FetchContractsFailure => ({
  type: contractsTypes.FETCH_CONTRACTS_FAILURE,
  payload,
});
