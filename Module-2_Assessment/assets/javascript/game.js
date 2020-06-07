const answers = ['bears', 'broncos', 'cowboys', 'eagles', 'giants', 'packers', 'patriots', 'seahawks', 'texans', 'vikings'];

const images = ['../images/bears.jpg', '../images/broncos.jpg', '../images/cowboys.jpg', '../images/eagles.jpg', '../images/giants.jpg', '../images/packers.jpg', '../images/patriots.jpg', '../images/seahawks.jpg', '../images/texans.jpg', '../images/vikings.jpg'];

let num = Math.ceil(Math.random() * 10) - 1;

let curString = createEmptyString(answers[num].length);
//"hello".split('').join(' ');

let curAnswer = [];

let guessesLeft = 13;

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function createEmptyString(len) {
  let str = "";
  for(let i = 0; i < len; i++) {
  str = str.concat("_");
  }
  return str;
}

document.addEventListener("keyup", function (event) {
  let guess = event.key;
  
  if(answers[num].includes(guess) && !curAnswer.includes(guess)) {
    for(i = 0; i < answers[num].length; i++) {
      if(answers[num][i] === guess) {
        curString = setCharAt(curString, i, guess);
        curAnswer.push(guess);
        console.log("curString: " + curString.split('').join(' '));
        //console.log("curAnswer: " + curAnswer);
      }
    }
  }
  else {
    guessesLeft--;
    console.log("Wrong guess! Number of guesses left: " + guessesLeft);
  }
  
  if(guessesLeft <= 0) {
    console.log("You Lose!");
    num = Math.ceil(Math.random() * 10) - 1;
    curString = createEmptyString(answers[num].length);
    guessesLeft = 13;
    curAnswer = [];
    console.log("curString: " + curString.split('').join(' '));
    //TODO: make a reset function!!!
  }
  else if(curAnswer.length >= answers[num].length) {
    console.log("You Win!");
    num = Math.ceil(Math.random() * 10) - 1;
    guessesLeft = 13;
    curString = createEmptyString(answers[num].length);
    curAnswer = [];
    console.log("curString: " + curString.split('').join(' '));
    //TODO: make a reset function!!!
  }
  
});


