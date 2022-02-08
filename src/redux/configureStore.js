import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './co2Emissions/co2Emissions';

const rootReducer = combineReducers({
  reducer,
});

const composedEnhancer = compose(applyMiddleware(logger), applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composedEnhancer,
);
export default store;
