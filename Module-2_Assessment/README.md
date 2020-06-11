# HANGMAN: NFL Edition
## *By Jeremy Lopez-Carchi*

**How To Play:**

* The user will be presented with an image of one of 32 NFL team logos, chosen at random
* The user will then have 13 tries to guess the team's name by pressing keys
* If user guesses CORRECTLY:
	* The letter guessed by the user will appear in the 'Letters Guessed' section
	* The letter guessed by the user will also appear in the 'Current Word' section
	* The string 'Correct guess!' will appear to the left of the guess counter
	* If the user has guessed all letters CORRECTLY:
		* The win counter goes up by 1
		* A sound sample of a cheering crowd will play
		* A new team and their logo will be chosen at random to play again (same team may be picked again)
		* The string 'You WON!' will appear to the left of the guess counter
* If user guesses INCORRECTLY:
	* The guesses counter will go down by 1
	* The letter guessed by the user will appear in the 'Letters Guessed' section
	* The string 'Wrong guess!' will appear to the left of the guess counter
	* If the user has used up all 13 guesses:
		* A sound sample of a booing crowd will play
		* A new team and their logo will be chosen at random to play again (same team may be picked again)
		* The string 'You LOST!' will appear to the left of the guess counter 