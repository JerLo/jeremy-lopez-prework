//PROTOTYPE

let answer = "vikings";

let curString = "";
for(let i = 0; i < answer.length; i++) {
  curString = curString.concat("_");
}

let curAnswer = [];

let guessesLeft = 13;

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

document.addEventListener("keyup", function (event) {
  let guess = event.key;
  
  if(answer.includes(guess) && !curAnswer.includes(guess)) {
    for(i = 0; i < answer.length; i++) {
      if(answer[i] === guess) {
        curString = setCharAt(curString, i, guess);
        curAnswer.push(guess);
        console.log("curString: " +curString);
        console.log("curAnswer: " +curAnswer);
      }
    }
  }
  else {
    guessesLeft--;
    console.log("Wrong guess! Number of guesses left: " + guessesLeft);
  }
  
  if(guessesLeft <= 0) {
    console.log("You Lose!");
    return;
  }
  else if(curAnswer.length >= answer.length) {
    console.log("You Win!");
    return;
  }
  
});


