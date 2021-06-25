import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
    const SquareComponents = squares.flat().map(square => {
      return (
        <Square disabled = {square.disabled} onClickCallback={onClickCallback} value={square.value} id = {square.id}></Square>
      );
    });
  return (
    <div class="grid">
    {SquareComponents}
    </div>
  )
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return ( <div>
    {squareList}
  </div>)
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
