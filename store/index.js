import { composeWithDevTools } from "@redux-devtools/extension";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import user from "./user/userReducer";
import thread from "./thread/threadReducer";

const RootReducers = combineReducers({
  user,
  thread,
});

const middleware = [thunk];

export const store = createStore(
  RootReducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
