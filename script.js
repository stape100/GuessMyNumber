'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    //When a player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '60rem';
    document.querySelector('.number').textContent = secretNumber;

    // Track the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '☝Too High' : '👇Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.message').textContent = '😢Sorry Game Over!😢';
    }
  }
});

//When a players guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '☝Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.score').textContent = '0';
//       document.querySelector('.message').textContent = '😢Sorry Game Over!😢';
//     }
//     //When a player's guess is too low
//   } else if (guess < secretNumber) {
//   }
// });
// When you hit the 'Again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
