import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let squareList = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      squareList.push(<Square 
        id={squares[row][col].id} 
        key={squares[row][col].id}
        value={squares[row][col].value} 
        onClickCallback={onClickCallback}>
        </Square>);
    };
  };
  return squareList;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return (<div className="grid" >
    {squareList}
  </div>);
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
