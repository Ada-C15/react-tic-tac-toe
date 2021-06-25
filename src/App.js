import React, { useState } from 'react';
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
  const [currentPlayer, setPlayerState] = useState(PLAYER_1); 

    const squareId = (id) => {
      setPlayerState(!currentPlayer);
      const player = currentPlayer ? PLAYER_1 : PLAYER_2;
      
      squares.forEach(row=>{
        row.forEach(square => {
          if (square.id === id) {
            if(square.value === '')
              if (player === PLAYER_1) {
                console.log(PLAYER_1)
                square.value = 'x'
              }else{
                console.log(PLAYER_2)
                square.value = 'o'
              }
          }else if(square.value != ''){
            checkForWinner()
          }
        })
      })   
    }

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    
    //possible approach to calculating squares

    // const options = [
    //   [0,1,2],
    //   [3,4,5],
    //   [6,7,8],
    //   [0,3,6],
    //   [1,4,7],
    //   [2,5,8],
    //   [6,4,2],
    //   [0,4,8]
    // ]

    // squares.forEach(row=>{
    //   row.forEach(square=>{
    //     for(let i = 0; i < options.length; i++) {
    //       const [a, b, c] = options[i];
    //       console.log(a)
    //       if (square[a].value && square[a].value === square[b].value && square[a] === square[c]) {
    //         console.log(square[a])
    //         return square[a]
    //       }
    //     }

    //   })
    // })


  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback = {squareId}/>
      </main>
    </div>
  );
}

export default App;
