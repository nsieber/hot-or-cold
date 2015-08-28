(function() {
	'use strict';

	var number, guess, lastGuess, guessCount = 0;

	$(document).ready(function(){

		/*--- Display information modal box ---*/
	  	$(".what").click(function(){
	    	$(".overlay").fadeIn(1000);
	  	});

	  	/*--- Hide information modal box ---*/
	  	$("a.close").click(function(){
	  		$(".overlay").fadeOut(1000);
	  	});

			/*--- Start new game ---*/
			$(".new").click(newGame());

			/*--- Respond to guess ---*/
			$("#guessButton").click(newGuess($("#userGuess").val()));

			/*--- Display guess count ---*/
			$("#count").val(guessCount);
	});

	function generateNumber() {
		return Math.round(Math.random() * 100);
	}

	function newGame() {
		number = generateNumber();
		guessCount = 0;
	}

	function newGuess(num) {
		if (isNumber(num)) {
			giveFeedback(num);
			printGuess(num);
		}
	}

	function isNumber(num) {
		if (!isNaN(num)) {
			return;
		}
	}

	function giveFeedback(guess) {
		if (Math.abs(number - guess) < Math.abs(number - lastGuess)) {
			warmer();
		} else {
			colder();
		}
	}

	function printGuess(num) {
		guessCount += 1;
		// add num to list of guesses
	}

})();
