import React from 'react';
import { styled } from '@material-ui/styles';
import Balances from './balances';

const Div = styled('div')({
  '& #balances > table': {
    '& td': {
      borderColor: '#FFFFFF',
    },
    '& > thead > tr > th': {
      fontSize: '1.2em',
      backgroundColor: '#3A80BA',
      color: '#FFFFFF',
      borderColor: '#FFFFFF',
    },
    '& tbody': {
      '& tr:nth-child(odd)': {
        background: '#F1F1F1',
      },
    },
  },
});

const StyledBalances = () => {
  return (
    <Div>
      <Balances />
    </Div>
  );
};

export default StyledBalances;
