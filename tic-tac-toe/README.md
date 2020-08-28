# Tic-Tac-Toe Game
## This Tic-Tac-Toe game is a two-player game played on a 3 x 3 grid. Players take turns. Player one marks “X” and Player 2 marks “O”. A winner is declared when one player can align 3 of their markings in a row, in a column, or diagonally.

<img width="1667" alt="tic-tac-toe" src="https://user-images.githubusercontent.com/69063454/91622492-55486d00-e965-11ea-80af-2a8e635cf107.png">

## How It's Made
Tech used: HTML5, CSS3, and JavaScript ES6.

My team and I created global variables and several functions like checkWin() that has conditionals to see when a player wins. A function stop() was declared for the purpose of not letting the user play after someone has won. For the players, I did an array where "X" and "O" are pushed into the array with some functions that manipulate the DOM.

### Optimizations
When someone clicked on the edges a mark used to appear, this bug was fixed. After someone won, the game still let someone play and update the turn; this bug was also fixed.

#### Note
The game is in the process of becoming responsive
