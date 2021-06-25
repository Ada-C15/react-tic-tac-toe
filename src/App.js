import React, { useState } from 'react';
import './App.css';
import * as utils from './utils';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

// Create Box component
const Box = (props) => {
    return (
        <button className="board__box" onClick={props.onClickCallback}>
            {props.value}
        </button>
    );
};

const generateSquares = () => {
    const squares = [];

    let currentId = 0;

    for (let row = 0; row < 3; row += 1) {
        squares.push([]);
        for (let col = 0; col < 3; col += 1) {
            squares[row].push({
                id: currentId,
                value: '',
            });
            currentId += 1;
        }
    }

    return squares;
};

const App = () => {
    // This starts state off as a 2D array of JS objects with
    // empty value and unique ids.
    const [squares, setSquares] = useState(generateSquares());

    const [currentUser, setCurrentUser] = useState(PLAYER_1);
    const [winner, setWinner] = useState('');

    // Wave 2
    // You will need to create a method to change the square
    //   When it is clicked on.
    //   Then pass it into the squares as a callback

    const checkForWinner = () => {
        for (const row of squares) {
            let rowWinner = '';
            let rowDraw = false;
            let count = 1;
            for (const square of row) {
                if (rowDraw) {
                    break;
                }
                if (!rowWinner) {
                    rowWinner = square.value;
                } else if (square.value !== rowWinner) {
                    rowDraw = true;
                } else {
                    count += 1;
                }
            }
            if (!rowDraw && count > 2 && !winner) {
                setWinner(rowWinner);
            }
        }

        for (let i = 0; i < 3; i += 1) {
            let colWinner = '';
            let colDraw = false;
            let count = 1;
            for (const row of squares) {
                if (colDraw) { 
                    break;
                }
                if (!colWinner) {
                    colWinner = row[i].value;
                } else if (row[i].value !== colWinner) {
                    colDraw = true;
                } else {
                    count += 1;
                }
            }
            if (!colDraw && count > 2 && !winner) {
                setWinner(colWinner);
            }
        }

        if (
            squares[0][0].value &&
            squares[0][0].value === squares[1][1].value &&
            squares[1][1].value === squares[2][2].value
        ) {
            setWinner(squares[0][0].value);
        }
        if (
            squares[0][2].value &&
            squares[0][2].value === squares[1][1].value &&
            squares[1][1].value === squares[2][0].value
        ) {
            setWinner(squares[0][2].value);
        }
    };

    const resetGame = () => {
        // Complete in Wave 4

        setSquares(generateSquares());
        setCurrentUser(PLAYER_1);
        setWinner('');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Tic Tac Toe</h1>
                <h2>Winner is {winner}</h2>
                <button onClick={resetGame}>Reset Game</button>
            </header>
            <main>
                <Board
                    squares={squares}
                    onClickCallback={(id) => {
                        let newSquares = [];

                        for (const row of squares) {
                            let newRow = [];
                            for (let square of row) {
                                if (square.id === id && !square.value) {
                                    square.value = currentUser;
                                    if (currentUser === PLAYER_1) {
                                        setCurrentUser(PLAYER_2);
                                    } else {
                                        setCurrentUser(PLAYER_1);
                                    }
                                }
                                newRow.push(square);
                            }
                            newSquares.push(newRow);
                        }

                        setSquares(newSquares);

                        checkForWinner();
                    }}
                />
            </main>
        </div>
    );
};

export default App;
