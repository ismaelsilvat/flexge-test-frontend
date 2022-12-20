import ContractsSaga from "./contracts.sagas";

const sagas = [ContractsSaga];

export const initSagas = (sagaMiddleware: any): void =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
