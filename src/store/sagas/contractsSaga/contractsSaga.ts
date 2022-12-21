import { all, put, takeLatest } from "redux-saga/effects";
import { Contract } from "../../types/types";
import {
  fetchContractsFailure,
  fetchContractsSuccess,
} from "../../actions/contractsActions";
import { contractsTypes } from "../../Actiontypes/contractsTypes";
import { api } from "../../../config/axios";
import store from "../..";

import * as Effects from "redux-saga/effects";
import { Contract2 } from "../../types/types";

const call: any = Effects.call;

async function getContracts() {
  const token = store.getState().api.headers.Authorization;
  const page = store.getState().api.page;
  const contracts = await api.get<Contract2[]>(`/auth/contracts/${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const contractsUpdated = contracts.data.map((e: Contract2) => {
    const nome = e.company[0];
    const newObject: Contract = { ...e, company: nome };
    return newObject;
  });
  return contractsUpdated;
}

export function* fetchContractsSaga(): any {
  try {
    const response = yield call(getContracts);
    yield put(
      fetchContractsSuccess({
        contracts: response,
      })
    );
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";
    if (e instanceof Error) {
      yield put(
        fetchContractsFailure({
          error: e.message,
        })
      );
    } else {
      yield put(
        fetchContractsFailure({
          error: errorMessage,
        })
      );
    }
  }
}

function* contractsSaga() {
  yield all([
    takeLatest(contractsTypes.FETCH_CONTRACTS_REQUEST, fetchContractsSaga),
  ]);
}

export default contractsSaga;
