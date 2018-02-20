// Global variables


// requiring our Classroom module exported from classroom.js
var Words = require("./words.js");


// var userGuess; 

// const chalk = require('chalk');

// var inquirer = require('inquirer');


// inquirer.prompt([/* Pass your questions in here */
// {type: "input",
// message: "What is your guess?",
// name: "userGuess"}
// ]).then(answers => {
//     // Use user feedback for... whatever!!
//     console.log(answers.userGuess);
// });


//   // Variables that set the initial state of our hangman game.
//   wordInPlay: null,
//   lettersOfTheWord: [],
//   matchedLetters: [],
//   guessedLetters: [],
//   guessesLeft: 0,
//   totalGuesses: 0,
//   letterGuessed: null,
//   wins: 0,

// creating and storing a new classroom object
// var firstWord = new Word("David", 212);
// var secondClass = new Classroom("Jerome", 709)

// // calling the addStudent method on our firstClass object
// firstClass.addStudent("Chi", "Coding", 3.87);
// secondClass.addStudent("Kim", "JS", 4.0)

// console.log(firstClass);
// console.log(secondClass)

// test
// var wordSelection = new WordArray();
//   random = wordSelection.wordInPlay();


var firstWord = new Words(currentWord); 
firstWord.wordSplit();
firstWord.addLetters();
firstWord.display();

