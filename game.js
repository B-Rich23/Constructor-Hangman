// Global variables
var userGuess; 

const chalk = require('chalk');

var inquirer = require('inquirer');

inquirer.prompt([/* Pass your questions in here */
{type: "input",
message: "What is your guess?",
name: "userGuess"}
]).then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers.userGuess);
});
