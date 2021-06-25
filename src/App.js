import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

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
  const [isXTurn, setisXTurn] = useState(true);
  const [isWinner, setIsWinner] = useState('')
  // const [resetSquares, setResestSquares] = useState(squares)

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    const updatedSquares = [...squares];
    for (let i=0; i<updatedSquares.length; i++) {
      for (let j=0; j<updatedSquares[i].length; j++) {
        if (updatedSquares[i][j].value && updatedSquares[i][j].id===id) {
            return;
        
      }else if (isXTurn && updatedSquares[i][j].id === id) {
          updatedSquares[i][j].value = PLAYER_1
          setisXTurn(false)
        } else if (updatedSquares[i][j].id === id) {
          updatedSquares[i][j].value = PLAYER_2
          setisXTurn(true)
        }

      }
    }
      setSquares(updatedSquares);
      let winner = checkForWinner(updatedSquares);
      setIsWinner(winner)
  };
    

 


  const checkForWinner = (squares) => {
    // Complete in Wave 3
    for (let i = 0; i < 3; i++) {
      if (squares[0][i].value === 'x' && squares[1][i].value === 'x' && squares[2][i].value === 'x') {
        return 'x'
      } else if (squares[i][0].value === 'x' && squares[i][1].value === 'x' && squares[i][2].value === 'x') {
        return 'x'
      } else if (squares[0][i].value === 'o' && squares[1][i].value === 'o' && squares[2][i].value === 'o') {
        return 'o'
    } else if (squares[i][0].value === 'o' && squares[i][1].value === 'o' && squares[i][2].value === 'o') {
      return 'o'
    }};

    
    if (squares[0][0].value === 'x' && squares[1][1].value === 'x' && squares[2][2].value === 'x') {
      return 'x'
    } else if (squares[0][0].value === 'o' && squares[1][1].value === 'o' && squares[2][2].value === 'o') {
      return 'o'
    } else if (squares[0][2].value === 'x' && squares[1][1].value === 'x' && squares[2][0].value ==='x') {
      return 'x'
    } else if (squares[0][2].value === 'o' && squares[1][1].value === 'o' && squares[2][0].value ==='o') {
      return 'o'
    };

    for (let i=0; i < squares.length; i++) {
      for (let j=0; j < squares[i].length; j++) {
        if (squares[i][j].value === '') {
          return '';
        }
      }
    }
    
    return 'tie';
  };
  
  
  const resetGame = () => {
    setSquares(generateSquares());
    setIsWinner('');
    setisXTurn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {isWinner} </h2>
        <button onClick={() => resetGame()}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
};

export default App;
