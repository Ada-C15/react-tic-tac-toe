import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  console.log('props:', props)

  return <button
    className="square"
    onClick={() => props.clickSquare(props.id, props.value)}
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
