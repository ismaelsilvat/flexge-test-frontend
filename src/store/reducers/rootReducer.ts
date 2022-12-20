import { combineReducers } from "redux";
import contractsReducer from "./contractsReducer/contractsReducer";

const rootReducer = combineReducers({
  contracts: contractsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
