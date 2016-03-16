// these are my basic variables I'm stating
var playerChoice = '';
var randomizer = 0;
var compChoice = '';
var output = '';
var userscore = 0;
var compscore = 0;
var tiescore = 0;


// function to clear out the scores back to zero to start the game over again
function reset(cleare) {
		userscore = 0;
		document.getElementById('userWin').innerHTML = userscore;
		compscore = 0;
		document.getElementById('computerWin').innerHTML = compscore;
		tiescore = 0;
		document.getElementById('tieTie').innerHTML = tiescore;
}


// function to randomly select the computers choice
function = randomize() {
	randomizer = Math.random();
	if (randomizer < 0.34) {
		compChoice = 'rock';
	} else if(randomizer <= 0.67) {
		compChoice = 'paper';
	} else {
		compChoice = 'scissors';
	}
	output = compare(playerChoice, compChoice);
	junction(output);
}

// the picture clicks are run here
document.getElementById('rock').onclick = function() {
	playerChoice = 'rock';
	randomize();
}
document.getElementById('paper').onclick = function() {
	playerChoice = 'paper';
	randomize();
}
document.getElementById('scissors').onclick = function() {
	playerChoice = 'scissors';
	randomize();
}


// this is where i compare the player choice to the computer choice
function = compare(playerChoice, compChoice) {
	munction(playerChoice);
	punction(compChoice);
	
	if(playerChoice === compChoice) {
		tieTieTie();
		return "TIE";
	}
	if(playerChoice === 'rock') {
		if(compChoice === 'scissors') {
				userWinWin();
				return 'Player Wins!';
		} else {
				computerWinWin();
				return 'Computer Wins :(';

			}
	}
	if(playerChoice === 'paper') {
		if(compChoice === 'rock') {
				userWinWin();
				return 'Player Wins!';
		} else {
				computerWinWin();
				return 'Computer Wins :(';
			}
	}
	if(playerChoice === 'scissors') {
		if(compChoice === 'rock') {
				userWinWin();
				return 'Player Wins!';
		} else {
				computerWinWin();
				return 'Computer Wins :(';
			}
	}
}


// bad function names that i should change
function = junction(output) {
	document.getElementById('monkey').innerHTML = output;
}

function = munction(playerChoice) {
	document.getElementById('user').innerHTML = ('User: ' + playerChoice);
}

function = punction(compChoice) {
	document.getElementById('computer').innerHTML = ('Computer: ' + compChoice);
}


// this is where i total up the scores for everyone
function userWinWin() {
	userscore += 1;
	document.getElementById('userWin').innerHTML = userscore;
}

function computerWinWin() {
	compscore += 1;
	document.getElementById('computerWin').innerHTML = compscore;
}

function tieTieTie() {
	tiescore += 1;
	document.getElementById('tieTie').innerHTML = tiescore;
} 












