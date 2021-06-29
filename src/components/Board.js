import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let squareBox = [];
  //loop through index, length of squares (2D)
  for (let i = 0; i < squares.length; i++)
  {
    squareBox = squareBox.concat(squares[i]);
  };
}
  console.log(squareBox);
  //iterate through each index of squareBoxOne
  return squareBox.map((square, index) => {
    return <Square key={index} id={square.id} value={square.value}
    onClickCallback={onClickCallback} />
    console.log(`this is the grid`);
  });


const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
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
