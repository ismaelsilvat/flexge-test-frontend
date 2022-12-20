import { contractsTypes } from "../../Actiontypes/contractsTypes";
import { ContractsActions, ContractsState } from "../../types/types";

const initialState: ContractsState = {
  pending: false,
  Contracts: [],
  error: null,
};

export default (state = initialState, action: ContractsActions) => {
  switch (action.type) {
    case contractsTypes.FETCH_CONTRACTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case contractsTypes.FETCH_CONTRACTS_SUCCESS:
      return {
        ...state,
        pending: false,
        contracts: action.payload.Contracts,
        error: null,
      };
    case contractsTypes.FETCH_CONTRACTS_FAILURE:
      return {
        ...state,
        pending: false,
        contracts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
