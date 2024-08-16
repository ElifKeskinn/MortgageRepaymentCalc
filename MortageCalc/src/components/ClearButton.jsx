import React from 'react';

const ClearButton = ({ onClear }) => {
  return (
    <button onClick={onClear} className="clear-button">
      Clear All
    </button>
  );
};

export default ClearButton;
