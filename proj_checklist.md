# Wave 1

- [X]  Take time to understand the shape of the 2D array created by generateSquares. Take notes on it, so you can refer to it throughout the project.

[
[0,1,2], 
[0,1,2], 
[0,1,2]
]

and each square element (9 total) contains `{id: 0, value: ""}` where `id` is the square number and ranges from 0-8 and `value` is an empty string

So the goal is to convert the above 2D array into [0,1,2,3,4,5,6,7,8] 

  
- [X]  Use PropTypes to help determine the required props for each component. In particular, check Square.


## `App` component

- [X]  Represent the state of the game board in a 2D array of objects
- [X]  use helper function `generateSquares`  to create the initial value of board state
- [X]  Render a `Board` component


## `Board` component

- [X]  Implement the function `generateSquareComponents` to take in a 2D array, and transform it into a 1D array of nine `Square` components
- [X]  `Board` component should pass the appropriate information from the game state to each `Square`.


## `Square`

- [X]  The `Square` component should display the value passed into it.
- [X]  The `Square` component should also hold an id. Square doesn't need to render this ID, but it will be used when handling events!

---





# Wave 2

- [X] When a user clicks on a square, it should set the square's value to "X" or "O", depending on the current player's turn. This should update the game's state.


## `App` component

- [X] create a method that updates the game state appropriately (Try utilizing the Square's ID value, which is unique to each sequre)


## `Board` component

- [X] The PropTypes of Board state that there is a required prop named `onClickCallback` - The value of this prop must be a function


## `Square`

- [X] The PropTypes of Square state that there is a required prop named `onClickCallback` - The value of this prop must be a function

---





# Wave 3

## `App` component

- [X] When a user places an "X" or "O" mark, the game should check if there is a winner. If a mark creates a line of three matching marks (lines can be horizontal, vertical, or diagonal), then:
- [X] The player who made the mark becomes the winner.
- [X] The winner's "name" ("X" or "O") appears in the heading.
- [X] All squares become unclickable.
- [X] The game is a tie if there are no more available squares and no winner has been declared

- [X] Implement the function `checkForWinner` in the App component
