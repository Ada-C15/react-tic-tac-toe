import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  //*** NOT WORKING, probably need to use STATE!  ***/
  const [value, setValue] = useState('');
  
  const fillSquare = () => {
    setValue('M');
  };

  return (
    <button 
      className="square"
      onClick={fillSquare}>
      {props.value}
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
