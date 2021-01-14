'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = 'Correct number ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;

let guessTries = 0;

function generateSecretNumber() {
    return Math.trunc(Math.random() * 20 + 1);
}

function setMessageContent(message) {
    document.querySelector('.message').textContent = message;
}

function printGuessTries() {
    if(guessTries === 1) {
        document.querySelector('h1').textContent = `It took you ${guessTries} try to guess the number!`;
    } else document.querySelector('h1').textContent = `It took you ${guessTries} tries to guess the number.`
}

let secretNumber = generateSecretNumber();
console.log(secretNumber);

let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    guessTries++;

    // When there is no input
    if (!guess) {
        setMessageContent('No number 🥶.');

    // When player wins
    } else if (guess === secretNumber) {
        setMessageContent('You guessed the number! 👑');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        printGuessTries();
        
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // When guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            setMessageContent(guess > secretNumber ? 'Your number is too high. 📉' : 'Your number is too low. 📉');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            setMessageContent('You lost the game. 😔');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){

    // Reset secret number

    secretNumber = generateSecretNumber();
    console.log(secretNumber);
    // Reset score

    score = 20;
    guessTries = 0;
    document.querySelector('.score').textContent = score;

    // Reset text content, background-color & number width if round was won:

    setMessageContent('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.hint').textContent = 'Get a hint!';
    document.querySelector('h1').textContent = 'Guess My Number!';

})

document.querySelector('.hint').addEventListener('click', function(){
    if(secretNumber%2===0){
        document.querySelector('.hint').textContent = 'The number is par.';
    } else document.querySelector('.hint').textContent = 'The number is impar.';
})