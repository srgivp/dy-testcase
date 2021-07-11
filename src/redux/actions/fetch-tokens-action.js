import { FETCH_TOKENS_ERROR, FETCH_TOKENS_REQUEST, FETCH_TOKENS_SUCCESS } from './action-types';
import { address } from '../../utils/inputs';
import erc20AbiJson from '../../utils/erc20.abi.json';
import { ethereumToken } from '../../utils/tokens';

const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider('https://cloudflare-eth.com'));
export const fetchTokensSuccess = payload => {
  return {
    type: FETCH_TOKENS_SUCCESS,
    payload,
  };
};
export const fetchTokensError = payload => {
  return {
    type: FETCH_TOKENS_ERROR,
    payload,
  };
};
export const fetchTokensRequest = payload => async dispatch => {
  dispatch({ type: FETCH_TOKENS_REQUEST });
  const { tokens } = payload;
  let balances = await Promise.all(
    tokens.map(async token => {
      const tokenComplete = { ...token };
      try {
        const contract = new web3.eth.Contract(erc20AbiJson, token.address);
        const rawBalance = await contract.methods.balanceOf(address).call();
        tokenComplete.balance = rawBalance / Math.pow(10, tokenComplete.decimals);
        return tokenComplete;
      } catch (error) {
        tokenComplete.balance = 'failed to fetch';
        dispatch(fetchTokensError({ error }));
        return tokenComplete;
      }
    })
  );
  balances = balances.sort((a, b) => {
    if (typeof a.balance === 'string') {
      return 1;
    } else if (typeof b.balance === 'string') {
      return -1;
    } else {
      return b.balance - a.balance;
    }
  });
  try {
    const rawBalance = await web3.eth.getBalance(address);
    ethereumToken.balance = rawBalance / Math.pow(10, ethereumToken.decimals);
  } catch (error) {
    ethereumToken.balance = 'failed to fetch';
    dispatch(fetchTokensError({ error }));
  }
  balances = [ethereumToken, ...balances];
  dispatch(fetchTokensSuccess(balances));
};
