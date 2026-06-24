let randomNumber=parseInt(Math.random()*100+1);


const submit=document.querySelector('#subt');
const userInput=document.querySelector('.guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=0;
let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
//
if(isNaN(guess)){
    alert('please enter a valid number');
}
else if(guess>100){
    alert('please enter a number less than 100');
}
else if(guess<1){
    alert('please enetr a number greater than 1');
}
else{
    prevGuess.push(guess);
    if(numGuess>10){
        displayGuess(guess);
        displayMessage(`Game Over, The Correct number was ${randomNumber}`);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
    //checking the status of the number guessed by the user

    if(guess === randomNumber){
        displayMessage(` ${guess} You Guessed it Right...!`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage('your Guessed number is TOO low');
    }
     else if(guess>randomNumber){
        displayMessage('your Guessed number is TOO High');
    }
}

function displayGuess(guess){
    // if(remaining === 0){
    //     endGame();
    // }
    userInput.value='';
    guessSlot.innerHTML+= `${guess}, `;
     numGuess++;
    remaining.innerHTML=`${10-numGuess}`;
   
}

function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    guessSlot.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgameStart">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newgameStart');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


