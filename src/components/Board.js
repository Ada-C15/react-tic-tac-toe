import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// takes 2d array and makes it an 1D array of square values 
const generateSquareComponents = (squares, onClickCallback) => {

  let squareOne = []
  for(let i = 0; i <squares.length; i++)
  {
      squareOne = squareOne.concat(squares[i]);
  };
  console.log(squareOne)
  // these are being handed down to square 
  return squareOne.map((square,index) => { // call this function when someone clicks on it 
    return <Square key ={index} id={square.id} value={square.value} onClickCallback={onClickCallback}/>
  })
};


// creating board component 
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
