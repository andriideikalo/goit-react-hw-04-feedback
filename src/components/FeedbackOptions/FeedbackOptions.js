import React from 'react';
import PropTypes from 'prop-types';
// import Ul from './FeedbackOptionsStyles';
import Button from './FeedbackOptionsStyles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="button-list">
      {options.map(option => (
        <li key={option}>
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
            name={option}
          >
            {option}
          </Button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propeTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
