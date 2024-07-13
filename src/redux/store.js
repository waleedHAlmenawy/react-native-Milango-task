// reducers/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { repositoriesReducer } from './reducers/repositoriesReducer';

const rootReducer = combineReducers({
    repositories: repositoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;