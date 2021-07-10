import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { CLEAN_ERROR } from '../redux/actions/action-types';

const ErrorHandler = () => {
  const stateError = useSelector(state => state.error);
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const cleanError = () => {
    dispatch({ type: CLEAN_ERROR });
  };
  useEffect(() => {
    if (stateError) {
      addToast(stateError.message ? `${stateError.message}` : 'Unknown error has occured', {
        appearance: 'error',
        onDismiss: () => cleanError(),
      });
    }
  }, [stateError]);

  return <div id="error-handler"> </div>;
};

export default ErrorHandler;
