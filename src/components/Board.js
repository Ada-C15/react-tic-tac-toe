import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {
    // Complete this for Wave 1
    // squares is a 2D Array, but
    //  you need to return a 1D array
    //  of square components
    ///
    // src/components/board-box.jsx
    ///

    ///Takes a 2D array and changing it to a list of Html elements (list 1D array) .
    let newArr = [];
    for (let i = 0; i < squares.length; i++) {
        newArr = newArr.concat(squares[i]);
    }

    let squaresArr = [];
    for (let i = 0; i < newArr.length; i++) {
        const currentSquare = newArr[i];
        squaresArr.push(
            <Square
                key={currentSquare.id}
                value={currentSquare.value}
                id={currentSquare.id}
                onClickCallback={onClickCallback}
            />
        );
    }
    return squaresArr;
};

const Board = ({ squares, onClickCallback }) => {
    const squareList = generateSquareComponents(squares, onClickCallback);
    // console.log(squareList);
    return <div className="grid">{squareList}</div>;
};

Board.propTypes = {
    squares: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                value: PropTypes.string.isRequired,
            })
        )
    ),
    onClickCallback: PropTypes.func.isRequired,
};

export default Board;
