import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = ({value, id, onClickCallback}) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  
  const markSquare = () => {
    /*console.log('hello world')
    console.log({id:id, value:value})*/
    return onClickCallback({
      id: id,
      value: value
    })
  }

  return (
    <button onClick={markSquare} className="square">
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
