import { combineReducers } from "@reduxjs/toolkit";
import { sofaReducer } from "./sofaReducer";
import { tableReducer } from "./tableReducer";
import { cupReducer } from "./cupReducer";
import { chairReducer } from "./chairReducer";
const rootReducer = combineReducers({
  sofa: sofaReducer,
  chair: chairReducer,
  cup: cupReducer,
  table: tableReducer,
});
export default rootReducer;
