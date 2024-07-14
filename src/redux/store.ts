import {
  createStore,
  applyMiddleware,
  combineReducers,
  Store,
  AnyAction,
} from 'redux';
import {thunk} from 'redux-thunk';
import {repositoriesReducer} from './reducers/repositoriesReducer';
import {ThunkMiddleware} from 'redux-thunk';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

const store: Store<any, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<any, AnyAction>),
);

export default store;
