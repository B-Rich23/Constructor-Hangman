// requiring our Classroom module exported from classroom.js
var Words = require("./words.js");


// Global variables


var userGuess; 

  // Variables that set the initial state of our hangman game.
 var wordInPlay = null;
 var lettersOfTheWord = [];
 var matchedLetters = [];
 var guessedLetters = [];
 var guessesLeft = 0;
 var totalGuesses = 0;
 var letterGuessed = null;
 var wins = 0;




var firstWord = new Words(currentWord); 
firstWord.wordSplit();
firstWord.addLetters();
firstWord.display();

var inquirer = require('inquirer');

var runGame = function () {
inquirer.prompt([/* Pass your questions in here */
{type: "input",
message: "What is your guess?",
name: "userGuess"}
]).then(answers => {
	    // Use user feedback for... whatever!!
	    userGuess = answers.userGuess;
	    wordInPlay = currentWord;
	    // console.log(wordInPlay);
	    // while (i <= wordInPlay.length) {
	    for (i = 0; i < wordInPlay.length; i++) {
	    	// console.log(wordInPlay[i]);
	    if (userGuess === wordInPlay[i]) {
	    	// wordInPlay[i].toString();
	    	firstWord.display();
	    	console.log("Correct Charlie!");
	    	// return inquirer.prompt(prompts);
	    	clear()
	    	runGame();

	    }
	    // else if ()
	    else {
		    guessedLetters.push(userGuess);
		    // console.log(guessedLetters);
		    // return guessedLetters;

		}
	}

});
};


runGame();



