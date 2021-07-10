import { combineReducers } from 'redux';
import { tokensReducer } from './tokens-reducer';
import { errorReducer } from './error-reducer';

const rootReducer = combineReducers({
  tokens: tokensReducer,
  error: errorReducer,
});

export default rootReducer;
