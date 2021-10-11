import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";

// Logger with default options
import logger from "redux-logger";
export const store = createStore(rootReducer, applyMiddleware(logger));
