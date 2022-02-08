import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";

export default function configureStore(initialState) {
	const store = createStore(reducer, initialState, applyMiddleware(logger));
	return store;
}
