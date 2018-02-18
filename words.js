// requiring our Letters module exported from letters.js
var Letters = require("./letters.js");

// constructor function for creating word objects
var Words = function(newWord) {
  // this.newWord will hold all of our letter objects
  this.newWord = [];
  // a method that creates a letter using our Letters constructor.
  // It then pushes the new Letters object to this.newWord and updates this.numStudents
  this.addLetters = function(letter, placeholder) {
    this.newWord.push(new Letters(letter, placeholder);
    	result();
  };
//   // this method will tell you how many students are in the class
//   this.studentCount = function() {
//     return this.students.length;
//   };
// };

// exporting our Classroom constructor. We will require it in main.js
module.exports = Words;
