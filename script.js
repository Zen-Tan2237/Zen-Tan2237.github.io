function showContent(idToShow) {
  const allContents = ['content1', 'content2', 'content3'];
  const allButtons = ['btn1', 'btn2', 'btn3'];

  allContents.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  allButtons.forEach(btnId => {
    document.getElementById(btnId).classList.remove('active');
  });

  document.getElementById(idToShow).classList.remove('hidden');

  const btnIndex = allContents.indexOf(idToShow);
  if (btnIndex !== -1) {
    document.getElementById(allButtons[btnIndex]).classList.add('active');
  }
}

window.onload = () => showContent('content1');

//Game script
let score = 0;
const target = document.getElementById('target-box');
const scoreDisplay = document.getElementById('score-display');
const gameArea = document.getElementById('game-container');

function moveTarget() {
  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  target.style.left = `${newX}px`;
  target.style.top = `${newY}px`;
}
target.addEventListener('mouseover', ()=> {
  setTimeout(600);
  moveTarget();
})
target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveTarget();
});

document.getElementById('reset-game-btn').addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  target.style.left = '0px';
  target.style.top = '0px';
});

// Move the target every 1.5 seconds to keep it lively
setInterval(moveTarget, 1500);
