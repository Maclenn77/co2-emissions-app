import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import co2Emissions from './co2Emissions/co2Emissions';
import details from './details/details';
import countries from './countries/countries';

const rootReducer = combineReducers({
  co2Emissions,
  details,
  countries,
});

const composedEnhancer = compose(applyMiddleware(logger), applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composedEnhancer,
);
export default store;
