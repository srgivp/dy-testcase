import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';
import { tokensInitialState } from './reducers/tokens-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const initialState = {
  tokens: tokensInitialState,
  error: null,
};

const store = createStore(rootReducer, initialState, enhancer);

export default store;
