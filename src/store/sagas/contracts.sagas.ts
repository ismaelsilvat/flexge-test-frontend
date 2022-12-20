import { delay, put, take, cancel, StrictEffect } from "redux-saga/effects";
import contract, {
  SEARCH_CONTRACTS,
  SEARCH_CONTRACTS_ERROR,
  SEARCH_CONTRACTS_SUCCESS,
  SEARCH_INPUT_CHANGE,
} from "../modules/contract";
import { contractsService } from "../../services/getContracts";
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;
const fork: any = Effects.fork;

function* searchContracts(
  searchTerm: any
): Generator<StrictEffect, any, typeof contractsService.fetchContracts> {
  yield delay(500);

  try {
    yield put({
      type: SEARCH_CONTRACTS,
    });
    const payload = yield call(contractsService.fetchContracts, searchTerm);
    yield put({
      type: SEARCH_CONTRACTS_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: SEARCH_CONTRACTS_ERROR,
      payload: e,
    });
  }
}

export default function* watchAll(): any {
  let task;
  while (true) {
    const { payload } = yield take(SEARCH_INPUT_CHANGE);
    if (task) {
      yield cancel(task);
    }
    if (payload && payload.length >= 3) {
      task = yield fork(searchContracts, payload);
    }
  }
}
