import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback, currentPlayer) => {
  const SingleD = [];
  for (let i=0; i < 3; i++) {
    for (let j=0; j < 3; j++) {
      SingleD.push(<Square key={ squares[i][j].id } value={ squares[i][j].value } id={ squares[i][j].id } onClickCallback={ onClickCallback } currentPlayer={ currentPlayer} />);
    }
  }
  return SingleD;
}

const Board = (props) => {
  const squareList = generateSquareComponents(props.squares, props.onClickCallback, props.currentPlayer);
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
  currentPlayer: PropTypes.string.isRequired
};

export default Board;