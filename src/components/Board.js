import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// squares param comes from the return value of generateSquares func from App.js
const generateSquareComponents = (squares, onClickCallback) => {

  //  empty list variable, will hold the value of the flattened 2D->1D array
  let squareOneD = [];

  // create for loop to iterate through each index-the length of squares (2D array)
  // concatenate the values squares and add it to the empty 1D variable
  for (let i = 0; i < squares.length; i++)
  {
    squareOneD = squareOneD.concat(squares[i]);
  };
  console.log(squareOneD);

  // map iterates through each index of squareOneD
  //  it sets the values to the props: id, value and onClickCallback
  return squareOneD.map((square, index) => {
    return <Square key={index} id={square.id} value={square.value} onClickCallback={onClickCallback} />
    console.log(`this makes the square grid`);
  });
  
  // DONE 
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

};

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
};

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
