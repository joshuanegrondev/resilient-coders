// *Variables*
// Create a variable and console log the value
// Create a variable, add 10 to it, and alert the value
// *Functions*
// Create a function that adds two numbers and alert the numbers
// Create a function that subtracts three numbers and console log the numbers
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

// variables
const money = 0;
console.log(money);

let pancakes = 5;
pancakes = pancakes + 10;
alert (pancakes);


function addTwoNums(num1, num2){
  alert (num1 + num2)

  // let sum = num1 + num2
  // alert (sum)
}

function subThreeNum(num1, num2, num3) {
  let daDifference = num1 - num2 - num3
  console.log(daDifference);
}

function addTwoJumanji(num1, num2) {
  let sum = num1 + num2;
  if (sum>50) {
    alert ("JUMANJI")
  } else {
    alert (sum)
  }
}

function multiThreeAlertZebra (nym1, nym2, nym3){
  let product = nym1*nym2*nym3;
  if (product % 0 === 3) {
    alert ("ZEBRA")
  } else {
    alert ("NOT ZEBRA")
  }
}

// document.getElementById('hi').style.color = "blue"

document.getElementById('hi').onclick = changeColor
let clicks = 0
function changeColor(){
  clicks++
  if (clicks %2 ===0){
    document.getElementById('hi').style.color = "blue"
  }else {
    document.getElementById('hi').style.color = "red"
  }

}



// Create a function that takes in three arguments. If the product of said arguments is a multiple of 24, convert the product to a string and then print that string x times to the console where x is the last argument given


function threeThenCheck (num1, num2, num3){
  let product = num1 * num2 * num3
  if (product % 24 ===0){
    let prodString = product.toString()
    for (let i = 0; i<num3; i++){
      console.log(prodString);
    }
  }
}

// Create a function that takes in 5 arguments. If the first argument is even multiply the numbers. If the first argument is odd, add all the numbers. If the result is over 300, print the result to the console x times where x is the 3rd argument. If the result is under 300, print the result to the console x times where x is the 4th argument.

function takeFiveAndStuff (n1,n2,n3,n4,n5){
  let num = 0
  if (n1 % 2 ===0){
    num = n1*n2*n3*n4*n5
  }else {
    num=n1+n2+n3+n4+n5
  }
  if(num > 300 ){
    for (let i = 0; i<n3; i++){
      console.log(num);
    }
  } else if (num < 300){
    for (let j=0; j<n4; j++){
      console.log(num);
    }
  } else {
    console.log("THIS IS SPARTA");
  }
}


// Create a variable, reassign the value, add the value to the dom

let pen = 1;
pen = 2;
document.getElementById('pen').attribute = pen

// Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication

let itself = 4;
itself = itself * itself;
document.getElementById('itself').attribute = itself

//Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value


function celciusToFahrenheit(){
  var temperature = celsius;
  var toFahrenheit = temperature * 9 / 5 + 32;
  console.log (toFahrenheit);
}

// Create a function takes in two arguments. Create a function that takes in one argument and alerts that value. Call the second function with an argument that is the sum from the original two argument function.

function twoArguments (num1, num2){
  let addition = num1 + num2;
  function oneArgument(num3){
    alert (num3);
  }
  return ( addition );
}



// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

function chooseRandom (){
  let weapon = "spock";
  let randomNumber= Math.random();
  if (randomNumber<.2){
    weapon = "rock"
  } else if (randomNumber <.4) {
    weapon = "paper"
  } else if (randomNumber < .6){
    weapon = "scissors"
  } else if (randomNumber<.8){
    weapon = "lizard"
  } else {
    weapon = "spock"
  }
  alert (weapon);
}
document.getElementById('weapon').onclick = chooseRandom;

// Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers.

function isItdivisible (num1, num2){
  let product = num2/num1;
  let sum = num1 + num2;
  if (num2 % num1 === 0){
    alert (product);
  } else {
    alert (sum);
  }
}
isItdivisible (3, 5)
