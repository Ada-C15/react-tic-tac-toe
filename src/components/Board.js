import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
    const squaresArray = [].concat(...squares);
    const newSquares = []
    for (const square of squaresArray) {
        newSquares.push(<Square key={square.id} id={square.id} value={square.value} onClickCallback={onClickCallback}></Square>)
    }
    return newSquares
}

const Board = ({ squares, onClickCallback }) => {
    const squareList = generateSquareComponents(squares, onClickCallback);
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
