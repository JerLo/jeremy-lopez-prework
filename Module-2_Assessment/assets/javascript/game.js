const answers = ['49ers', 'bears', 'bengals', 'bills', 'broncos', 'browns', 'buccaneers', 'cardinals', 
                 'chargers', 'chiefs', 'colts', 'cowboys', 'dolphins', 'eagles', 'falcons', 'giants', 
                 'jaguars', 'jets', 'lions', 'packers', 'panthers', 'patriots', 'raiders', 'rams', 
                 'ravens', 'redskins', 'saints', 'seahawks', 'steelers', 'texans', 'titans', 'vikings'];

const images = ['assets/images/49ers.png', 'assets/images/bears.png', 'assets/images/bengals.png', 'assets/images/bills.png',
                'assets/images/broncos.png', 'assets/images/browns.png', 'assets/images/buccaneers.png', 'assets/images/cardinals.png',
                'assets/images/chargers.png', 'assets/images/chiefs.png', 'assets/images/colts.png', 'assets/images/cowboys.png',
                'assets/images/dolphins.png', 'assets/images/eagles.png', 'assets/images/falcons.png', 'assets/images/giants.png',
                'assets/images/jaguars.png', 'assets/images/jets.png', 'assets/images/lions.png', 'assets/images/packers.png',
                'assets/images/panthers.png', 'assets/images/patriots.png', 'assets/images/raiders.png', 'assets/images/rams.png',
                'assets/images/ravens.png', 'assets/images/redskins.png', 'assets/images/saints.png', 'assets/images/seahawks.png',
                'assets/images/steelers.png', 'assets/images/texans.png', 'assets/images/titans.png', 'assets/images/vikings.png'];
                

let num = Math.ceil(Math.random() * 32) - 1;

let curString = createEmptyString(answers[num].length);

let curAnswer = [];

let guessedLetters = [];

let guessesLeft = 13;

let wins = 0;

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

function rightGuess(guess) {
  for(i = 0; i < answers[num].length; i++) {
      if(answers[num][i] === guess) {
        curString = setCharAt(curString, i, guess);
        curAnswer.push(guess);
        guessedLetters.push(guess);
        guessedLetters = Array.from(new Set(guessedLetters));
      }
  }
}

function wrongGuess(guess) {
  guessesLeft--;
  guessedLetters.push(guess);
  guessedLetters = Array.from(new Set(guessedLetters));
}

function reset() {
  num = Math.ceil(Math.random() * 32) - 1;
  curString = createEmptyString(answers[num].length);
  document.querySelector("#image").src = images[num];
  guessesLeft = 13;
  curAnswer = [];
  guessedLetters = [];
}

document.querySelector("#curString").innerText = curString.split('').join(' ');
document.querySelector("#image").src = images[num];
console.log(images[num]);

document.addEventListener("keyup", function (event) {
  let guess = event.key;
  
  if(answers[num].includes(guess) && !curAnswer.includes(guess)) {
    rightGuess(guess);
    
    
    console.log("curString: " + curString.split('').join(' '));
    document.querySelector("#curString").innerText = curString.split('').join(' ');
    
    console.log("Correct guess! Number of guesses left: " + guessesLeft);
    document.querySelector("#guessesLeft").innerText = "Correct guess! Number of guesses left: " + guessesLeft;
    
    console.log("guessedLetters: " + guessedLetters);
    document.querySelector("#guessedLetters").innerText = guessedLetters;

  }
  else {
    wrongGuess(guess);
    
    console.log("Wrong guess! Number of guesses left: " + guessesLeft);
    document.querySelector("#guessesLeft").innerText = "Wrong guess! Number of guesses left: " + guessesLeft;
    
    console.log("guessedLetters: " + guessedLetters);
    document.querySelector("#guessedLetters").innerText = guessedLetters;
  }
  
  if(guessesLeft <= 0) {
    console.log("You Lose!");
    reset();
    document.querySelector("#guessesLeft").innerText = "You LOST! Number of guesses left: " + guessesLeft;
    console.log("curString: " + curString.split('').join(' '));
    document.querySelector("#curString").innerText = curString.split('').join(' ');
    document.querySelector("#guessedLetters").innerText = guessedLetters;
  }
  else if(curAnswer.length >= answers[num].length) {
    console.log("You Win!");
    wins++;
    document.querySelector("#wins").innerText = "Wins: " + wins;
    reset();
    document.querySelector("#guessesLeft").innerText = "You WON! Number of guesses left: " + guessesLeft;
    console.log("curString: " + curString.split('').join(' '));
    document.querySelector("#curString").innerText = curString.split('').join(' ');
    document.querySelector("#guessedLetters").innerText = guessedLetters;
  }
});


