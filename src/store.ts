import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./redux/reducers/auth.reducer";

// Store interface
export interface storeType {
  auth: {};
}

// All reducers
const reducers = {
  auth: authReducer,
};

// All middlewares
const middlewares: any[] = [thunk, logger];

// Store Initialization
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
