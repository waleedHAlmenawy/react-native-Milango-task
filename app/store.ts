// src/store.ts
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { repositoriesReducer } from "./reducers/repositoriesReducer";

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
