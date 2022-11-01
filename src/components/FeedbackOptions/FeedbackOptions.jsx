import React from 'react';
import { ListButton, ListItemButton, Button } from './FeedbackOptions-styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ FeedbackCountFunc, stateKeys }) {
  return (
    <ListButton>
      {stateKeys.map(stateKey => (
        <ListItemButton key={stateKey}>
          <Button
            key={stateKey}
            type="button"
            onClick={() => FeedbackCountFunc(stateKey)}
          >
            {stateKey}
          </Button>
        </ListItemButton>
      ))}
    </ListButton>
  );
}

FeedbackOptions.propTypes = {
  FeedbackCountFunc: PropTypes.func.isRequired,
  stateKeys: PropTypes.array.isRequired,
};
