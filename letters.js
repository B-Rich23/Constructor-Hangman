var WordArray = require("./wordarray.js");


// Constructor function for creating Letters objects
var Letters = function(letter) {
	  this.letter = letter;
	  this.placeholder = "_";
	  this.guessed = false;
};

Letters.prototype.result = function() {
	if (this.guessed === true) {
		return this.letter;	
	}
	else {
		return this.placeholder;
	}
    
};

Letters.prototype.reveal = function(userGuess) {
	userGuess;
	if (userGuess === this.letter) {

		this.guessed === true;
				return this.letter;	
	}
	else {
		return this.placeholder;
	}

		// this.result();
	// }
	// else {
	// 	this.result();
	}
    
// };

var wordSelection = new WordArray();
 wordSelection.wordInPlay();
 console.log(currentWord);


// exporting our Letters constructor
module.exports = Letters;
