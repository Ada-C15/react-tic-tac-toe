import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const one_d = [];
  for (let i=0; i < 3; i++) {
    for (let j=0; j < 3; j++) {
      one_d.push(<Square value={ squares[i][j].value } id={ squares[i][j].id } onClickCallback={ onClickCallback } />);
    }
  }
  return one_d;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return (
    <div className="grid" >
      {squareList}
    </div>
  );
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
