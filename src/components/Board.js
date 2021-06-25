import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {


  const flatList = []
  console.log(squares)
  squares.forEach(row=>{
    row.forEach(square =>{
      flatList.push(square)
    })
  });

  const squareComponents = flatList.map(data => <Square id={data.id} value={data.value} onClickCallback={onClickCallback} ></Square>)
  return squareComponents
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid">{squareList}</div>
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
