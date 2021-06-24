import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


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

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);

  console.log(squareList);

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
