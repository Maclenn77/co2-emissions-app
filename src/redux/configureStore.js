import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    regions,
    countries,
  });

const composedEnhancer = compose(applyMiddleware(logger), applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composedEnhancer,
);
export default store;