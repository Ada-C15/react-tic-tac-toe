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