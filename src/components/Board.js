import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let oneDArray = [];

  for(let i = 0; i < squares.length; i++)
  {
    oneDArray = oneDArray.concat(squares[i]);
  }
  // console.log(oneDArray)
  // return oneDArray;
  return oneDArray.map((square,index) => {
    return <Square key={index} id={square.id} value={square.value} onClickCallback = {onClickCallback}/>
  })
};

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
