let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const form = document.querySelector('.form');
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const previousGuess = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');

const startOver = document.querySelector('.resultParas');

const lowOrHi = document.querySelector('.lowOrHi');
const p= document.createElement('p')
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessInput = parseInt(userInput.value);
    console.log(guessInput);
    validateGuess(guessInput);
  });
}

//validate number is between 1 and 100 and check it is number
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter number more than 1');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//check number is equal to random number or not if low then show low or high then show high
function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too high`);
  }
}

//values clean and guess arr update and guess reamining update
function displayGuess(guess) {
  userInput.value = ''
  previousGuess.innerHTML += `${guess}, `
  numGuess++
  guessRemaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        random=parseInt(Math.random() * 100 + 1);
        prevGuess=[]
        numGuess=1
        previousGuess.innerHTML=''
        guessRemaining.innerHTML=`${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })
}
