// var WordArray = require("./wordarray.js");


// Constructor function for creating Letters objects
var Letters = function(letter) {
	  this.letter = letter;
	  this.placeholder = "_";
	  this.guessed = false;
	  this.result = function() {
		if (this.guessed === true) {
			return this.letter;	
		}
		else {
			return this.placeholder;
		}
    
};
this.toString = function() {
	if (userGuess === this.letter) {
		this.guessed === true;
		result();
	}
	else {
		result();
	}
    
};

};

// Letters.prototype.result = function() {
// 	if (this.guessed === true) {
// 		return this.letter;	
// 	}
// 	else {
// 		return this.placeholder;
// 	}
    
// };

// Letters.prototype.toString = function() {
// 	if (userGuess === this.letter) {
// 		this.guessed === true;
// 		result();
// 	}
// 	else {
// 		result();
// 	}
    
// };

// userGuess = answers.userGuess;

// var userGuess = new Letters ("p", "_");
// console.log(userGuess);

// // exporting our Letters constructor
module.exports = Letters;
