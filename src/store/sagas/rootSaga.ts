import contractsSaga from "./contractsSaga/contractsSaga";
import * as Effects from "redux-saga/effects";

const all: any = Effects.all;

export function* rootSaga() {
  yield all([contractsSaga()]);
}
