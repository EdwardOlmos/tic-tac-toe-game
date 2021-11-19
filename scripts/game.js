function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("Please add player names before starting game");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectedGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add('disabled');
  switchPlayer();
}
