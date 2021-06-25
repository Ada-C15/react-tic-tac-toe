import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

let finalWinner = ''

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
  // This starts state off as a 2D array of JS objects with empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [isX, setIsX] = useState(true);

  //need to figure out way to stop one letter from over-writing the other
  const markSquare = (id) => {
    console.log(id)
    for(let i=0; i<squares.length; i++) {
      for(let j=0; j<squares[i].length; j++) {
        if (squares[i][j].id === id) {
          if (isX) {
            squares[i][j].value = 'X';
          }
          else{
            squares[i][j].value = 'O';
          }
        }
      };  
    };
    setIsX(!isX)
    setSquares(squares)
    const winner = checkForWinner(squares)
    if (winner) {
      console.log(`The winner is: ${winner}`)
      finalWinner = `The winner is: ${winner}!`
      resetGame()
    }
  };

  
  const checkForWinner = (squares) => {
    console.log(squares)
    if (squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value) {
      return squares[0][0].value
    }       
    else if (squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][0].value) {
      return squares[0][2].value
    }  
    for (let i=0; i <=2; i++) { 
      if (squares[0][i].value === squares[1][i].value && squares[0][i].value === squares[2][i].value) {
        return squares[0][i].value   
      }  
    }    
    for (let i=0; i <=2; i++) { 
      if (squares[i][0].value === squares[i][1].value && squares[i][0].value === squares[i][2].value) {
        return squares[i][0].value
      }  
    }  
    console.log(squares.flat())
    if (squares.flat().includes('')) {  
      return null;
    }
    return 'Tie'
  }

  const resetGame = () => {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2> {finalWinner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
          squares={squares} 
          onClickCallback={markSquare}
        />
      </main>
    </div>
  );
}

export default App;
