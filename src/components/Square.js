import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  return <button disabled={props.disabled} onClick={() => {props.onClickCallback(props.id)}} id={props.id} 
    className="square"
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
