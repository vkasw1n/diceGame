// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Roll dice for Player 1 and Player 2
  const player1Roll = rollDice();
  const player2Roll = rollDice();
  
  // Set the image source based on the roll for both players
  document.querySelector(".img1").setAttribute("src", `images/dice${player1Roll}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${player2Roll}.png`);
  
  // Update the result text based on the roll outcomes
  const result = document.querySelector("#result");
  if (player1Roll > player2Roll) {
    result.textContent = "🚩 Player 1 Wins!";
  } else if (player1Roll < player2Roll) {
    result.textContent = "Player 2 Wins! 🚩";
  } else {
    result.textContent = "It's a Draw!";
  }
  