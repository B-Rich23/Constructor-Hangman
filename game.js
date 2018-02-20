// requiring our Classroom module exported from classroom.js
var Words = require("./words.js");


// Global variables


var userGuess; 

  // Variables that set the initial state of our hangman game.
  wordInPlay = null;
  lettersOfTheWord = [];
  matchedLetters = [];
  guessedLetters = [];
  guessesLeft = 0;
  totalGuesses = 0;
  letterGuessed = null;
  wins = 0;

// const chalk = require('chalk');

// var figlet = require('figlet');
 
// figlet('Hangman', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });



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
	    	// wordInPlay[i].display();
	    	console.log("Correct Charlie!");
	    	// return inquirer.prompt(prompts);
	    	runGame();

	    }
	    // else if ()
	    else {
		    guessedLetters.push(userGuess);
		    // console.log(guessedLetters);
		    // return guessedLetters;

		}
	};

});
};

console.log(runGame);
runGame();



