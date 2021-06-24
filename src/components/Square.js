import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  // DO YOU MEAN WAVE 2? - I did this on line 16 onClickCallback
  //  Component to alert a parent 
  //  component when it's clicked on.
  console.log(props)  
  
  // Passing the onClickCallback function into the squares 
  return <button 
  className="square" 
  // I could have done this too:
  //  Calling 
  onClick={() => props.onClickCallback(props.id)}>
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
