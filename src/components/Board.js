import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
 let SquareAttributes = [];

  for(let i=0; i < squares.length; i++ ) {
    for(let j=0; j < squares[i].length; j++) {
      SquareAttributes.push(<Square value={squares[i][j].value}
        id={squares[i][j].id}
        onClickCallback={onClickCallback}
        key={squares[i][j].id}
        
        />);
      
    }
  }

  return SquareAttributes;


}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
