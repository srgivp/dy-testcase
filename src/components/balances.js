import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { fetchTokensRequest } from '../redux/actions/fetch-tokens-action';
import tokens from '../utils/tokens';
import { Table } from 'semantic-ui-react';
import StyledSpinner from './styled-spinner';

const Balances = () => {
  const tokensComplete = useSelector(state => state.tokens.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTokensRequest({ tokens }));
  }, [dispatch]);
  return tokensComplete.length ? (
    <div id="balances">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Token name</Table.HeaderCell>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tokensComplete.map((token, index) => {
            return (
              <Table.Row key={`row ${index}`}>
                <Table.Cell>{token.name}</Table.Cell>
                <Table.Cell>{token.symbol}</Table.Cell>
                <Table.Cell>
                  <NumberFormat
                    value={token.balance && !isNaN(token.balance) ? token.balance : 'failed to fetch'}
                    thousandSeparator={true}
                    displayType={'text'}
                    decimalScale={6}
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  ) : (
    <StyledSpinner />
  );
};

export default Balances;
