import { FETCH_TOKENS_ERROR, FETCH_TOKENS_REQUEST, FETCH_TOKENS_SUCCESS } from '../actions/action-types';

export const tokensInitialState = { loading: false, error: null, data: [] };

export const tokensReducer = (state = tokensInitialState, action) => {
  switch (action.type) {
    case FETCH_TOKENS_REQUEST: {
      return { ...state, ...{ loading: true, error: null } };
    }
    case FETCH_TOKENS_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }
    case FETCH_TOKENS_ERROR: {
      return { ...state, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
};
