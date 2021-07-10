import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTokensRequest } from '../redux/actions/fetch-tokens-action';
import tokens from '../utils/tokens';

const Balances = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTokensRequest({ tokens }));
  }, [dispatch]);
  return <></>;
};

export default Balances;
