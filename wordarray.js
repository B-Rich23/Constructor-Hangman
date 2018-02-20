
var WordArray = function() {
	this.wordChoices = ["tango", "whiskey", "foxtrot", "delta", "alpha", "omega", "bravo", "echo", "kilo", "lima", "river", "cheesecake", "gulfstream", "history", "igloo", "jackhammer", "motorcycle", "nurse", "ostrich", "pamper", "quarrel", "redeem", "salvation", "unlimited", "grace", "victory", "steadfast", "love", "mercy", "atonement", "propitiation", "warrior", "xylophone", "zenith"];  
    this.wordInPlay = function() {
    	currentWord = this.wordChoices[Math.floor(Math.random() * this.wordChoices.length)];
    	console.log(currentWord);
    };
};

  // wordInPlay = null;
  // lettersOfTheWord = [];

  // setupGame = function() {
  //   // Here we pick a random word.
  //   var objKeys = Object.keys(this.wordsToPick);
  //   this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

  //   // Split the chosen word up into its individual letters.
  //   this.lettersOfTheWord = this.wordInPlay.split("");
  //   // // Builds the representation of the word we are trying to guess and displays it on the page.
  //   // // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
  //   // this.rebuildWordView();
  // },

// var wordSelection = new WordArray();
//   wordSelection.wordInPlay();

  module.exports = WordArray;
