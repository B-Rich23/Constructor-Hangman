// requiring our Letters module exported from letters.js
var Letters = require("./letters.js");

// constructor function for creating word objects
var Words = function(word) {
  this.word = word;
  this.lettersOfTheWord;
  this.wordSplit = function () {
  	arrayStrings = this.word.split("");
  	console.log(arrayStrings);
  	 this.lettersOfTheWord = arrayStrings;
  	 console.log(this.lettersOfTheWord);

  };
  // this.wordInPlay = function () {
  	
  // 	// this.lettersOfTheWord.push(arrayStrings);
  //   	console.log(this.lettersOfTheWord);
  // };

  // // this.newWord will hold all of our letter objects
  this.newWord = [];
  // a method that creates a letter using our Letters constructor.
  // It then pushes the new Letters object to this.newWord and updates this.numStudents
  this.addLetters = function(letter) {
  	for (i = 0; i < this.lettersOfTheWord.length; i++ ) {
    this.newWord.push(new Letters(this.lettersOfTheWord[i]));
    	console.log(this.newWord);
    }
    };
    this.display = function () {
    	for (i = 0; i < this.newWord.length; i++) {
    		capture = this.newWord[i].result();
    		console.log(capture);
    	}
    
  };
};
//   // this method will tell you how many students are in the class
//   this.studentCount = function() {
//     return this.students.length;
//   };
// };

var firstWord = new Words("dog"); 
firstWord.wordSplit();
// firstWord.wordInPlay();
firstWord.addLetters();
firstWord.display();
// for (var i = 0; i < firstWord.newWord.length; i++) {
//   console.log(firstWord.newWord[i].result());
  
// };

// exporting our Classroom constructor. We will require it in main.js
module.exports = Words;
