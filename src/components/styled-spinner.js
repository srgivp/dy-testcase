import React from 'react';
import { styled } from '@material-ui/styles';
import Spinner from './spinner';

const Div = styled('div')({
  '& #spinner-container': {
    zIndex: 1,
    height: '100vh',
    width: '100vw',
    position: 'absolute',
  },
  '& #spinner-icon': {
    width: 'fit-content',
    margin: 'auto',
    marginTop: '39vh',
    fontSize: '3rem',
    animation: '$spin 1.3s infinite linear',
  },
  '@global': {
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
});

const StyledSpinner = () => {
  return (
    <Div>
      <Spinner />
    </Div>
  );
};

export default StyledSpinner;
