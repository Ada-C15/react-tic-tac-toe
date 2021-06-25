import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => { // TODO: Is this parameter even needed?
  const flattened = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col +=1) {
      flattened.push(squares[row][col]);
    }
  }

  return flattened;

}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);

  return <div className="grid" >
    {squareList.map(square => <Square key={square.id} id={square.id} value={square.value} onClickCallback={onClickCallback} />)}
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
