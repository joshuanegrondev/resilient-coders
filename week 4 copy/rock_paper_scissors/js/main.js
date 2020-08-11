var botScore=0,
playerScore=0;


function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	} else if(randomNumber<.6666){
		botsWeapon="paper";
	} else if (randomNumber<.999){
		botsWeapon="rock";
	}
	return botsWeapon;
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("That's rough, buddy");
}
function increasePlayerScore(){
	playerScore+=1;
document.getElementById("humanScore").innerHTML=playerScore;
displayCompleteMessage("YOU A MASTER!")
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
	){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}

document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	let botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
