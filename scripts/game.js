function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("Please add player names before starting game");
    return;
  }
  gameAreaElement.style.display = "block";
}