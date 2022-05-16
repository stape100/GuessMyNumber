'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

function displayMessage(text) {
  document.querySelector('.message').textContent = text;
}

function displayScore(num) {
  document.querySelector('.score').textContent = num;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}
displayNumber('?');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    //When a player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '60rem';
    displayNumber(secretNumber);

    // Track the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '☝Too High' : '👇Too Low');
      score--;
      displayScore(score);
    } else {
      displayScore('0');
      displayMessage('😢Sorry Game Over!😢');
    }
  }
});

// When the 'again' button is hit

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
