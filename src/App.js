import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

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

// the data structure of squares looks like this:
// [[{id: 0, value: ''}, {id: 1, value: ''}, {id: 2, value: ''}],
// [{id: 3, value: ''},{id: 4, value: ''}, {id: 5, value: ''}],
// [{id: 6, value: ''}, {id: 7, value: ''}, {id: 8, value: ''}]]

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [numSquaresFilled, setNumSquaresFilled] = useState(0);
  const [winner, setWinner] = useState(null);

  //helper function to change players to make code more readable
const changePlayers = () => {
  if (currentPlayer === PLAYER_1) {
    setCurrentPlayer(PLAYER_2);
  } else {
    setCurrentPlayer(PLAYER_1);
  };
}

//this function is passed in as the "clickcallback" function when we create Board which then is passed into Square and is "called/triggered" by the handleClick function in the Square component.

const updateSquares = (id) => {
  //can't get tie to work here either!
  if (winner === null && numSquaresFilled === 9){
    setWinner('Tie!')
  };
  if (winner !== null) return;
  // newSquares is a copy of squares - we have to put in NEW data for React to update/re-render the squares
  const newSquares = [...squares];
  let row = 0;
  let col = 0;
  let found = false;

  //idk if I could have written this while loop myself...
  while (row < 3 && !found) {
    while (col < 3 && !found) {
      let currentSquare = newSquares[row][col];
      if (currentSquare.id === id) {
        if (currentSquare.value !== '') return;
        // this is what happens when currentSquare id === given id
        found = true;
        currentSquare.value = currentPlayer;
        setNumSquaresFilled(numSquaresFilled + 1);
        changePlayers();
      }
      col += 1;
    }
    row += 1;
    col = 0;
  }
  setWinner(checkForWinner());
  //this is passing in the newSquares to reset/rerender the board with new squares w new values
  setSquares(newSquares);
};

  // const checkForWinner = () => {
  //   let i = 0;
  //   while (i < 3) {
  //     if (squares[i][0].value === squares[i][1].value &&
  //       squares[i][2].value === squares[i][1].value &&
  //       squares[i][0].value !== '') {
  //       return squares[i][0].value;
  //     } else if (squares[0][i].value === squares[1][i].value &&
  //       squares[2][i].value === squares[1][i].value &&
  //       squares[0][i].value !== '') {
  //       return squares[0][i].value;
  //     }
  //     i += 1;
  //   }
  //   if (squares[0][0].value === squares[1][1].value &&
  //     squares[2][2].value === squares[1][1].value &&
  //     squares[1][1].value !== '') {
  //     return squares[0][0].value;
  //   }

  //   if (squares[0][2].value === squares[1][1].value &&
  //     squares[2][0].value === squares[1][1].value &&
  //     squares[1][1].value !== '') {
  //     return squares[0][2].value;
  //   }
    
  //   return null;  
  // };

const checkOne = () => {
  let i = 0;
  while (i < 3) {
      if (squares[i][0].value === squares[i][1].value &&
      squares[i][2].value === squares[i][1].value &&
      squares[i][0].value !== '') {
      return squares[i][0].value;
  } else if (squares[0][i].value === squares[1][i].value &&
      squares[2][i].value === squares[1][i].value &&
      squares[0][i].value !== '') {
      return squares[0][i].value;
  }
  i += 1;
  }
  return false
};

const checkTwo = () => {
  if(squares[0][0].value === squares[1][1].value &&
  squares[2][2].value === squares[1][1].value &&
  squares[1][1].value !== '') {
  return squares[0][0].value;
  }
  return false
};

const checkThree = () => {
  if (squares[0][2].value === squares[1][1].value &&
  squares[2][0].value === squares[1][1].value &&
  squares[1][1].value !== '') {
  return squares[0][2].value;
  }
  return false
} ;

const checkForWinner = () => {
  const one = checkOne();
  const two = checkTwo();
  const three = checkThree();
  //not sure why i can't get tie to work!
  // if(one === false && two === false && three === false && numSquaresFilled === 9){
  //   return 'Tie'
  // }; 
  if(one){
      return one
  };
  if(two){
      return two
  };
  if(three){
      return three
  };

  return null;  
};


    const resetGame = () => {
      setSquares(generateSquares());
      setCurrentPlayer('X');
      setNumSquaresFilled(0);
      setWinner(null);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ currentPlayer }` : `Winner is ${ winner }`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  );
}

export default App;
