
var WordArray = function() {
	this.wordChoices = ["tango", "whiskey", "foxtrot", "delta", "alpha", "omega", "bravo", "echo", "kilo", "lima", "river", "cheesecake", "gulfstream", "history", "igloo", "jackhammer", "motorcycle", "nurse", "ostrich", "pamper", "quarrel", "redeem", "salvation", "unlimited", "grace", "victory", "steadfast", "love", "mercy", "atonement", "propitiation", "warrior", "xylophone", "zenith"];  
    this.wordInPlay = function() {
    	currentWord = this.wordChoices[Math.floor(Math.random() * this.wordChoices.length)];
    	console.log(currentWord);
    };
};


// var wordSelection = new WordArray();
//   wordSelection.wordInPlay();

  module.exports = WordArray;
