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

  const markSquare = (id) => {
    //can re-render if we write-over read-only squares var.  in this case, it would allow though
    //because the setIsX is called FIRST, but that is not normal.  so created newSquares as duplicate array
    const newSquares = [...squares]
    for(let i=0; i<newSquares.length; i++) {
      for(let j=0; j<newSquares[i].length; j++) {
        if (newSquares[i][j].id === id) {
          if (isX) {
            newSquares[i][j].value = 'X';
          }
          else{
            newSquares[i][j].value = 'O';
          }
        }
      };  
    };
    setIsX(!isX)
    setSquares(newSquares)
    const winner = checkForWinner(squares)
    if (winner) {
      console.log(`The winner is: ${winner}`)
      finalWinner = `The winner is: ${winner}!`
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
    setSquares(generateSquares())
    finalWinner = ''
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2> {finalWinner} </h2>
        <button onClick={() => resetGame()}>Reset Game</button>
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
