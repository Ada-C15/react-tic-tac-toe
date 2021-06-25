import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  let singleArray=[]

  for (let i = 0; i < squares.length; i++) {
    singleArray = singleArray.concat(squares[i]);
  }

  return singleArray.map((square) => {
    return <Square
      key={square.id}
      id={square.id}
      value={square.value}
      onClickCallback={onClickCallback}
    />
  });

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
