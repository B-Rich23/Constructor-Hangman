  
  wordInPlay = null;
  lettersOfTheWord = [];

  setupGame: function() {
    // Here we pick a random word.
    var objKeys = Object.keys(this.wordsToPick);
    this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    // Split the chosen word up into its individual letters.
    this.lettersOfTheWord = this.wordInPlay.split("");
    // // Builds the representation of the word we are trying to guess and displays it on the page.
    // // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
    // this.rebuildWordView();
  },