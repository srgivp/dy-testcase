import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = () => {
  const SpinnerIcon = <FontAwesomeIcon icon={faSpinner} />;
  return (
    <div id="spinner-container">
      <div id="spinner-icon">
        <span>{SpinnerIcon}</span>
      </div>
    </div>
  );
};

export default Spinner;
