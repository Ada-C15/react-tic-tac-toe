import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  // const [isClicked, setIsClicked] = useState(false);

  // const toggleState = () => {
  //   setIsClicked(!isClicked);
  // };

  // return (
  // <button onClick={toggleState}className="square">
  //   {props.value}
  // </button>
  // );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
