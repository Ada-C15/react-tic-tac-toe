import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({id, value, onClickCallback}) => {
  // For Wave 1 enable this Component to alert a parent component when it's clicked on.
  
    // What they gave us: return <button className="square"> {props.value} </button>

    // think this is wrong:
    // const markSquare = () => {
    //   props.onClickCallback(props.id);
    // };

    const markSquare= () => {
      onClickCallback(id)
      console.log(`Updating square with ${value}`)
    }
  

    return (
      <button className="square" 
        id={id} 
        value={value} 
        onClick={markSquare}
        > {value} 
      </button>
    )  
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
