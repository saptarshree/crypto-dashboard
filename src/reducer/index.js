import { combineReducers } from 'redux';
import cryptoReducer from './cryptoReducer';
import currencyReducer from './currencyReducer';
import exchangeReducer from './exchangeReducer';
import chartDataReducer from './chartDataReducer';


const rootReducer = combineReducers({
  crypto: cryptoReducer, 
  currency: currencyReducer,
  exchange: exchangeReducer,
  chartData: chartDataReducer,
  
  // You can add more reducers here if needed
});

export default rootReducer;
