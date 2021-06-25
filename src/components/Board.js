import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback, goesFirst) => {
  const oneRow = squares.map ((row) => {
    return row.map ((square) => {
      return (
        <Square id={square.id} value={square.value} onClickCallback={onClickCallback} goesFirst={goesFirst} />
      );
    });
  });

  return (oneRow);
}




const Board = ({ squares, onClickCallback, goesFirst}) => {
  const flattened = generateSquareComponents(squares, onClickCallback, goesFirst);
  // console.log(flattened);
  return <div className="grid" >
    { flattened }
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
  goesFirst: PropTypes.string.isRequired,

};

export default Board;
