import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  // onClick={() => props.onClickCallback(props.id)}
  // onClickCallback={onClickCallback}

  return <button className="square" onClick={() => props.onClickCallback(props.id)}>{props.value}</button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;


// return (
//   <button
//     data-hover={`Vote! ${props.votes}`}
//     onClick={() => props.onClickCallback(props.id)}
//   >
//     <div>
//       {props.name} Votes: {props.votes}
//     </div>
//   </button>
// );
// };