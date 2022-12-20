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

const call: any = Effects.call;

async function getContracts() {
  const token = store.getState().api.headers.Authorization;
  console.log(token);

  const contracts = await api.get<Contract[]>("/auth/contracts", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return contracts.data;
}

function* fetchContractsSaga(): any {
  try {
    const response = yield call(getContracts);
    yield put(
      fetchContractsSuccess({
        Contracts: response.data,
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
