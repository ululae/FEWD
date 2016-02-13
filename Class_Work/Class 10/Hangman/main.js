// Set up buttons
for(var i = 0; i < 26; i++) {
	var charCode = 65 + i;
	var letter = String.fromCharCode(charCode);

	// Add button to #letters div
	$('#letters').append('<button>' + letter + '</button>');
	}
	//Array of words
	var words = [
		"apple",
		"banana",
		"pear",
		"lemon",
		"grape",
		"dragonfruit",
		"pomelo"];

	var hiddenWord;
	var numGuesses;

function setupGame() {

	// Pick a random word
	var randomIndex = Math.floor(Math.random()*words.length);
	hiddenWord = words[randomIndex];
	console.log(hiddenWord)
	// Clear blanks
	$('#blanks').html('');

	// Set up blanks

	for (var i = 0; i < hiddenWord.length; i++) {
		$('#blanks').append('<span>_</span>');
	}

	// set up # of guesses
	numGuesses = 10;
	$('#guesses').html(numGuesses);

	//Re-enable all the buttons
	$('#letters button').prop('disabled', false);
};

// When user clicks on button
$('#letters button').click(function() {
	//Get letter from the button
	var buttonLetter = $(this).html();
	// alert(buttonLetter);

	var guessedRight = false;


	//Compare letter to hiddenword letter

	for(var i = 0; i < hiddenWord.length; i++) {
		// console.log(hiddenWord[i])
		if(buttonLetter.toLowerCase() === hiddenWord[i]) {
			//Replace the blank with the letter
			$('#blanks span').eq(i).html(buttonLetter);
			console.log("fu")
			guessedRight = true;
		}

	}

	//Disable the button ("disabled can also be true")
	$(this).attr("disabled", "disabled");

	//Check #blanks for underscores
	var foundBlanks = false;
	for(var i = 0; i < hiddenWord.length; i++){
		if($('#blanks span').eq(i).html() === '_') {
			foundBlanks = true;
			break;
		}

	 }	

	if(!foundBlanks) {
		alert('You win!');
		setupGame();
	}

	if(!guessedRight) { // If they guessed wrong
		//Decrease the number of guesses
		console.log("here")
		numGuesses--;
		$('#guesses').html(numGuesses);
	}
	

	if(numGuesses === 0) { // If they're out of guesses
		alert('You lose!');
		setupGame();
	}
});




setupGame();



