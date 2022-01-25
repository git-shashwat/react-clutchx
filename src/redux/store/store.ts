import createSagaMiddleware from "@redux-saga/core";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../root/root.reducer";
import rootSaga from "../root/root.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
