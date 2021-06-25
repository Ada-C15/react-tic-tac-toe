import React, { useState } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import './App.css';

import Board from './components/Board';


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
}

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const[activePlayer, setSwapActivePlayer] = useState(PLAYER_1); 
  const [usedSquares, setUsedSquares] = useState(0);

const checkForWinner = () => {
    for (let i=0; i<3; i+=1){
      if(squares[i][0].value === squares[i][1].value &&
          squares[i][2].value === squares[i][1].value &&
          squares[i][0].value !== '') {
        return squares[i][0].value;

      } else if (squares[0][i].value === squares[1][i].value && 
          squares[2][i].value === squares[1][i].value &&
          squares[0][i].value !== '') {
        return squares[0][i].value;
      }
    }
    
    if(squares[0][0].value === squares[1][1].value &&
        squares[2][2].value === squares[1][1].value &&
        squares[1][1].value !== '') {
      return squares[0][0].value;
    }

    if(squares[0][2].value === squares[1][1].value &&
        squares[2][0].value === squares[1][1].value &&
        squares[1][1].value !== '') { 
      return squares[0][2].value;
    }

    if (usedSquares === 9) {
      return 'tie';
    }
    return null; 
}





const updateBoard = (id) => { 
    if (winner !== null) return; 
    
    const newBoard = [...squares];
    let idFound = false;

    for(let row = 0; row < 3 && !idFound; row += 1) {
      for(let col = 0; col < 3 && !idFound; col += 1) {
        let currentSquare = Object.assign({}, (newBoard)[row][col]);
        if (currentSquare.id === id) { 
          if (currentSquare.value !== '') {
            return;
          }

          idFound = true;
          newBoard[row] = [...squares[row]];
          newBoard[row][col] = currentSquare;
          currentSquare.value = activePlayer;
          setUsedSquares(usedSquares + 1);
          if (activePlayer === PLAYER_1) {
            setSwapActivePlayer(PLAYER_2)
          } else {
            setSwapActivePlayer(PLAYER_1);
          }
        }
      }
    }
    setSquares(newBoard);
  }

const resetGame = () => {
    setSquares(generateSquares());
    setSwapActivePlayer('x');
    setUsedSquares(0);
  
    
  }

  const winner = checkForWinner();

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Active Player ${activePlayer}` : (winner === 'tie' ? `Tie`: `Winner is ${ winner}`)}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateBoard}/>
      </main>
    </div>
  );
}

export default App;
