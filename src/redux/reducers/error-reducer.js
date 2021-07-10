import { CLEAN_ERROR } from '../actions/action-types';

export const errorReducer = (state = null, action) => {
  if (action.payload && action.payload.error) {
    return {
      error: action.payload.error,
    };
  } else if (action.type === CLEAN_ERROR) {
    return { error: null };
  } else {
    return state;
  }
};
