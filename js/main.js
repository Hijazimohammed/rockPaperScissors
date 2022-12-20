const container = document.querySelector('.container');
const options = ['✊', '🖐', '✌'];
let player = '';
let computer = '';
const title = document.createElement('h1');
title.innerText = 'Rock, Paper, Scissors';

const container2 = document.createElement('div');
container2.className = 'container2';

const playerContainer = document.createElement('div');
playerContainer.className = 'player-container';
const playerTitles = document.createElement('h1');
playerTitles.innerText = 'Player Choice';

playerContainer.appendChild(playerTitles);
const playerResult = document.createElement('h2');
playerContainer.appendChild(playerResult);

const computerContainer = document.createElement('div');
computerContainer.className = 'computer-container';
const computerTitles = document.createElement('h1');
computerTitles.innerText = 'Computer Choice';
const computerResult = document.createElement('h2');
computerContainer.appendChild(computerTitles);
computerContainer.appendChild(computerResult);

container2.appendChild(playerContainer);
container2.appendChild(computerContainer);

const resultContainer = document.createElement('div');
resultContainer.className = 'result-container';

const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons-container';

const win = (player, computer) => {
  if (player === computer) {
    resultContainer.innerText = 'equals';
  } else if (player == '✊') {
    computer == '🖐'
      ? (resultContainer.innerText = 'Computer Win')
      : (resultContainer.innerText = 'Player Win');
  } else if (player == '🖐') {
    computer == '✊'
      ? (resultContainer.innerText = 'Player Win')
      : (resultContainer.innerText = 'Computer Win');
  } else if (player == '✌') {
    computer == '✊'
      ? (resultContainer.innerText = 'Computer Win')
      : (resultContainer.innerText = 'Player Win');
  }
};

const random = () => Math.floor(Math.random() * 3);

options.map((option) => {
  const button = document.createElement('button');
  button.className = 'button';
  button.innerText = option;
  button.addEventListener('click', () => {
    const player = (playerResult.innerText = button.innerText);

    const computer = (computerResult.innerText = options[random()]);
    win(player, computer);
  });
  buttonsContainer.appendChild(button);
});

const playAgain = document.createElement('button');
playAgain.className = 'again';
playAgain.innerText = 'play again';

playAgain.addEventListener('click', () => {
  playerResult.innerText = '';
  computerResult.innerText = '';
  resultContainer.innerText = '';
});

container.appendChild(title);
container.appendChild(container2);
container.appendChild(resultContainer);
container.appendChild(buttonsContainer);
container.appendChild(playAgain);
