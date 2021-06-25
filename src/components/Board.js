import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// ✅ Wave 1: Implement the function `generateSquareComponents` to take in a 2D array, and transform it into a 1D array of nine `Square` components
const generateSquareComponents = (squares, onClickCallback) => {

  // squares is in format [[0,1,2], [0,1,2], [0,1,2]]

  var flatSquareArray = [];

  for(let i=0; i<squares.length; i++) {
    flatSquareArray = flatSquareArray.concat(squares[i])
  }

  // ❗️ why nested return statements? is that even okay? 
  return flatSquareArray.map((square) => {
    return <Square
      value={square.value}
      id={square.id}
      onClickCallback={onClickCallback}
      key={square.id}
    />
  });
}

// ✅ Wave 1: `Board` component should pass the appropriate information from the game state to each `Square`.
// ✅ Wave 2: The PropTypes of `Board` state that there is a required prop named `onClickCallback`
const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);

  return (
    <div className="grid" >
      {squareList}
    </div>
  );
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
