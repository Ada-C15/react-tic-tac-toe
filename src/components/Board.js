import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const squaresFlatList = [];
  for (let row of squares) {
    for (let square of row) {
      squaresFlatList.push(<Square key={square.id} id={square.id} value={square.value} className={square.class} onClickCallback={onClickCallback}></Square>);
    }
  }
  return squaresFlatList;
}

const Board = ({ squares, onClickCallback/*, className*/ }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className='grid'/*{className}*/ >
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
