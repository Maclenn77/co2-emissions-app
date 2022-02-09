import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import co2Emissions from './co2Emissions/co2Emissions';

const rootReducer = combineReducers({
  co2Emissions,
});

const composedEnhancer = compose(applyMiddleware(logger), applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composedEnhancer,
);
export default store;
