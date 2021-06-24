import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const style = {
	border: '4px solid darkblue',
	borderRadius: '10px',
	width: '250px',
	height: '250px',
	margin: '0 auto',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};


const generateSquareComponents = ({squares, onClickCallback}) => (
    <div>
      <Square value="1" onClick={() => onClickCallback('dummy value')} />
      <Square value="2" onClick={() => onClickCallback('dummy value')} />
      <Square value="3" onClick={() => onClickCallback('dummy value')} />
      <Square value="4" onClick={() => onClickCallback('dummy value')} />
      <Square value="5" onClick={() => onClickCallback('dummy value')} />
      <Square value="6" onClick={() => onClickCallback('dummy value')} />
      <Square value="7" onClick={() => onClickCallback('dummy value')} />
      <Square value="8" onClick={() => onClickCallback('dummy value')} />
      <Square value="9" onClick={() => onClickCallback('dummy value')} />
  </div>

  )
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components


const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div style={style} className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
