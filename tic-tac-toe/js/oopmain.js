let player = {
  boxes = document.querySelectorAll('.box'),
  counter = 0,
  playerOne =[],
  playerTwo=[],

  boxOne = document.getElementById('boxOne')
  boxTwo = document.getElementById('boxTwo')
  boxThree = document.getElementById('boxThree')
  boxFour = document.getElementById('boxFour')
  boxFive = document.getElementById('boxFive')
  boxSix = document.getElementById('boxSix')
  boxSeven = document.getElementById('boxSeven')
  boxEight = document.getElementById('boxEight')
  boxNine = document.getElementById('boxNine')

  result = document.querySelector('#result')
  playersTurn = document.querySelector('#playersTurn')
  container = document.querySelector('#container')

  changeTurn: function(){
    if(counter % 2 == 0){
      document.getElementById("turn").innerHTML = "1";
    } else {
      document.getElementById("turn").innerHTML = "2";
    }
  }

  container.addEventListener("click",e=>{
    if (e.target.id && !playerOne.includes(e.target.id) && !playerTwo.includes(e.target.id) && e.target.id!="container"){
      if (counter%2===0) {
        playerOne.push(e.target.id);
        e.target.textContent='X';
      } else {
        playerTwo.push(e.target.id);
        e.target.textContent='O';
      }
      increment();
      checkWin();
      changeTurn();
    }

    console.log(playerOne);
    console.log(playerTwo);
  });

  increment: function(){
    return this.counter++;
  }

  checkWin: function(){
    let text = "";
    if ((boxOne.textContent === boxTwo.textContent && boxTwo.textContent === boxThree.textContent ) && (boxOne.textContent)){
      // if (boxOne.textContent=== 'X'){
      //   result.textContent='Player One Wins';
      // }
      // else {
      //   result.textContent='Player One Wins';
      // }
      (boxOne.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxOne.textContent);
    }
    else if ((boxFour.textContent === boxFive.textContent && boxFive.textContent === boxSix.textContent) && (boxFour.textContent)){
      (boxFour.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxOne.textContent);
    }
    else if ((boxSeven.textContent === boxEight.textContent && boxEight.textContent === boxNine.textContent) && (boxNine.textContent)){
      (boxSeven.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxOne.textContent);
    }
    else if ((boxOne.textContent === boxFour.textContent && boxFour.textContent=== boxSeven.textContent) && (boxSeven.textContent)){
      (boxOne.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxOne.textContent);
    }
    else if ((boxTwo.textContent === boxFive.textContent && boxFive.textContent === boxEight.textContent) && (boxEight.textContent)){
      (boxTwo.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxTwo.textContent);
    }
    else if ((boxThree.textContent === boxSix.textContent && boxSix.textContent === boxNine.textContent) && (boxNine.textContent)){
      (boxThree.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxThree.textContent);
    }
    else if ((boxOne.textContent === boxFive.textContent && boxFive.textContent === boxNine.textContent) && (boxNine.textContent)){
      (boxOne.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxOne.textContent);
    }
    else if ((boxThree.textContent === boxFive.textContent && boxFive.textContent === boxSeven.textContent) && (boxSeven.textContent)){
      (boxThree.textContent=== 'X')? result.textContent='Player One Wins': result.textContent='Player Two Wins'
      console.log(boxOne.textContent);
    }
    else if(playerOne.length + playerTwo.length === 9){
      result.textContent='its a draw';
    }
  }
}

;
