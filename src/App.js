import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

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

  const [currentPlayerX, setCurrentPlayerX] = useState(true);
  
  const updateGameState = (id) => {
    

    const game = squares.map((row) => {
        return row.map((square) => {
          if(id === square.id) {
            if(square.value === '' && !checkForWinner(squares)){
              if(currentPlayerX){
                square.value = 'x';
            } else{
                square.value = 'o';
            }
            setCurrentPlayerX(!currentPlayerX);
          }
        } 
        return square;
        } );
        
      });
      setSquares(game);
  };

  const checkForWinner = (squares) => {
    // diagonals
    if(squares[0][0].value && squares[0][0].value===squares[1][1].value && squares[0][0].value===squares[2][2].value){
      return squares[0][0].value;
    
    } 
    if(squares[0][2].value && squares[0][2].value===squares[1][1].value && squares[0][2].value===squares[2][0].value){
      return squares[0][2].value;
    }
    // vertical
    for(let i=0; i<3; i+=1){
      if(squares[0][i].value && squares[0][i].value===squares[1][i].value && squares[0][i].value===squares[2][i].value){
        return squares[0][i].value;
    }
  }
    //horizontal
    for(let i of squares) {
      if(i[0].value && i[0].value===i[1].value && i[0].value===i[2].value){
        return i[0].value;
      }
    }
    return null;
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {checkForWinner(squares)}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
        squares={squares} 
        onClickCallback ={updateGameState}
        />
      
      </main>
    </div>
  );
}

export default App;
