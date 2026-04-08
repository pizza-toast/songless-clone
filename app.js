let answer = "flickermood"; // correct answer (must match the track)

function startGame() {
  document.getElementById("result").innerText = "Game started!";
}

function submitGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();

  if (!guess) {
    document.getElementById("result").innerText = "Enter a guess.";
    return;
  }

  if (guess === answer) {
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }
}