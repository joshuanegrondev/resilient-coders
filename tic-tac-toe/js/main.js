// Group: Andy,Diana,J.Macklin, J.Negron, Nicole
let boxes = document.querySelectorAll('.box')
let counter = 0;
// document.querySelector("container").addEventListener("click", run=>{
// let x = event.target
// if (box.innerHTML !="x" || box.innerHTML !="o"){
//   }
// })
let playerOne =[]; // 'X'
let playerTwo=[]; // 'O'

// Board
// let counter = 0;
const boxOne = document.getElementById('boxOne')
const boxTwo = document.getElementById('boxTwo')
const boxThree = document.getElementById('boxThree')
const boxFour = document.getElementById('boxFour')
const boxFive = document.getElementById('boxFive')
const boxSix = document.getElementById('boxSix')
const boxSeven = document.getElementById('boxSeven')
const boxEight = document.getElementById('boxEight')
const boxNine = document.getElementById('boxNine')

const result = document.querySelector('#result')
const playersTurn = document.querySelector('#playersTurn')
const container = document.querySelector('#container')


// Players
// let PlayerOne = "X";
// let PlayerTwo = "O";
// let player = {
//   playLetter: () => {
//     if(playerChoice === "O")
//   }
// }
// X's, O's
// Squares
// Turns (Maybe?)
// Game
// Move Validation


// Winner/Loser
// let winOrLose = getElementsByClassName('statusResult')
// let win = [
//   [1, 2, 3], //[box1, box2, box3]
//   [4, 5, 6], //[box4, box5, box6]
//   [7, 8, 9], //[box7, box8, box9]
//   [1, 4, 7], //etc...
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

function changeTurn(){
  increment();
  if(counter % 2 == 0){
    document.getElementById("turn").innerHTML = "1";
  } else{
    document.getElementById("turn").innerHTML = "2";
  }
}

let clickingFunction = e=>{
 if (e.target.id && !playerOne.includes(e.target.id) && !playerTwo.includes(e.target.id) && e.target.id!="container"){
   if (counter%2===0) {
     playerOne.push(e.target.id);
     e.target.textContent='X';
   } else {
     playerTwo.push(e.target.id);
     e.target.textContent='O';
   }
   changeTurn();
   checkWin();
 }

 console.log(playerOne);
 console.log(playerTwo);
}


 container.addEventListener("click", clickingFunction);

function increment(){
  console.log(counter);
  return counter++;
}

function stop(){
  container.removeEventListener("click", clickingFunction)
  document.getElementById("playersTurn").innerHTML = "";
}


function checkWin(){
  let text = "";
  if ((boxOne.textContent === boxTwo.textContent && boxTwo.textContent === boxThree.textContent ) && (boxOne.textContent)){
    (boxOne.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxOne.textContent);
    stop()
  }
  else if ((boxFour.textContent === boxFive.textContent && boxFive.textContent === boxSix.textContent) && (boxFour.textContent)){
    (boxFour.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxOne.textContent);
    stop()
  }
  else if ((boxSeven.textContent === boxEight.textContent && boxEight.textContent === boxNine.textContent) && (boxNine.textContent)){
    (boxSeven.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxOne.textContent);
    stop()
  }
  else if ((boxOne.textContent === boxFour.textContent && boxFour.textContent=== boxSeven.textContent) && (boxSeven.textContent)){
    (boxOne.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxOne.textContent);
    stop()
  }
  else if ((boxTwo.textContent === boxFive.textContent && boxFive.textContent === boxEight.textContent) && (boxEight.textContent)){
    (boxTwo.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxTwo.textContent);
    stop()
  }
  else if ((boxThree.textContent === boxSix.textContent && boxSix.textContent === boxNine.textContent) && (boxNine.textContent)){
    (boxThree.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxThree.textContent);
    stop()
  }
  else if ((boxOne.textContent === boxFive.textContent && boxFive.textContent === boxNine.textContent) && (boxNine.textContent)){
    (boxOne.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxOne.textContent);
    stop()
  }
  else if ((boxThree.textContent === boxFive.textContent && boxFive.textContent === boxSeven.textContent) && (boxSeven.textContent)){
    (boxThree.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
    console.log(boxOne.textContent);
    stop()
  }
  else if(playerOne.length + playerTwo.length === 9){
    result.textContent="It's a draw";
  }
};


// Reset
// let resetAll =
const resetAll = document.getElementById("reset")
resetAll.addEventListener("click", () => {
  // const boxesClear = getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i ++) {
    boxes[i].innerHTML = "";
  }
  playerOne =[];
  playerTwo =[];

  result.innerHTML = "";
  container.addEventListener("click", clickingFunction);
  document.getElementById("playersTurn").innerHTML = "Player <span id='turn'>1</span>'s turn";
});
