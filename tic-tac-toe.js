// Tic Tac Toe JavaScript

/*
Click function playClick()
Conditions to win winningCriteria()
Announce the winner winningMessage()
Reset the game gameReset()
*/

// Onclick activate symbol change:
let gameStatus = "running";
let counter = 1;
function playClick(self) {
  if (self.innerHTML == "" && gameStatus == "running") {
    if (counter % 2 != 0) {
      self.innerHTML = "X";
      self.style.color= "purple";
      winningCriteria();
      counter++;
    } else {
      self.innerHTML = "O";
      self.style.color= "darkgreen";
      winningCriteria();
      counter++;
    }
  }
}

// Add event listener to every td box
document.getElementById("r1c1").addEventListener("click",
  function(){playClick(this)});
document.getElementById("r1c2").addEventListener("click",
  function(){playClick(this)});
document.getElementById("r1c3").addEventListener("click",
  function(){playClick(this)});

document.getElementById("r2c1").addEventListener("click",
  function(){playClick(this)});
document.getElementById("r2c2").addEventListener("click",
  function(){playClick(this)});
document.getElementById("r2c3").addEventListener("click",
  function(){playClick(this)});

document.getElementById("r3c1").addEventListener("click",
  function(){playClick(this)});
document.getElementById("r3c2").addEventListener("click",
  function(){playClick(this)});
document.getElementById("r3c3").addEventListener("click",
  function(){playClick(this)});

// Winning criteria:
function winningCriteria() {
  // conditions for X win
  // Horizontal X wins
  if (document.getElementById("r1c1").innerHTML == "X" &&
  document.getElementById("r1c2").innerHTML == "X" &&
  document.getElementById("r1c3").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r1c1").style.backgroundColor = "gold";
    document.getElementById("r1c2").style.backgroundColor = "gold";
    document.getElementById("r1c3").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r2c1").innerHTML == "X" &&
  document.getElementById("r2c2").innerHTML == "X" &&
  document.getElementById("r2c3").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r2c1").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r2c3").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r3c1").innerHTML == "X" &&
  document.getElementById("r3c2").innerHTML == "X" &&
  document.getElementById("r3c3").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r3c1").style.backgroundColor = "gold";
    document.getElementById("r3c2").style.backgroundColor = "gold";
    document.getElementById("r3c3").style.backgroundColor = "gold";
    winningMessage();
  }
  // Vertical X wins
  else if (document.getElementById("r1c1").innerHTML == "X" &&
  document.getElementById("r2c1").innerHTML == "X" &&
  document.getElementById("r3c1").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r1c1").style.backgroundColor = "gold";
    document.getElementById("r2c1").style.backgroundColor = "gold";
    document.getElementById("r3c1").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r1c2").innerHTML == "X" &&
  document.getElementById("r2c2").innerHTML == "X" &&
  document.getElementById("r3c2").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r1c2").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r3c2").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r1c3").innerHTML == "X" &&
  document.getElementById("r2c3").innerHTML == "X" &&
  document.getElementById("r3c3").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r1c3").style.backgroundColor = "gold";
    document.getElementById("r2c3").style.backgroundColor = "gold";
    document.getElementById("r3c3").style.backgroundColor = "gold";
    winningMessage();
  }
  // Diagonal X wins
  else if (document.getElementById("r1c1").innerHTML == "X" &&
  document.getElementById("r2c2").innerHTML == "X" &&
  document.getElementById("r3c3").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r1c1").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r3c3").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r3c1").innerHTML == "X" &&
  document.getElementById("r2c2").innerHTML == "X" &&
  document.getElementById("r1c3").innerHTML == "X") {
    gameStatus = "xWins";
    document.getElementById("r3c1").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r1c3").style.backgroundColor = "gold";
    winningMessage();
  }
  // Conditions for O wins
  // Horizontal O wins
  else if (document.getElementById("r1c1").innerHTML == "O" &&
  document.getElementById("r1c2").innerHTML == "O" &&
  document.getElementById("r1c3").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r1c1").style.backgroundColor = "gold";
    document.getElementById("r1c2").style.backgroundColor = "gold";
    document.getElementById("r1c3").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r2c1").innerHTML == "O" &&
  document.getElementById("r2c2").innerHTML == "O" &&
  document.getElementById("r2c3").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r2c1").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r2c3").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r3c1").innerHTML == "O" &&
  document.getElementById("r3c2").innerHTML == "O" &&
  document.getElementById("r3c3").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r3c1").style.backgroundColor = "gold";
    document.getElementById("r3c2").style.backgroundColor = "gold";
    document.getElementById("r3c3").style.backgroundColor = "gold";
    winningMessage();
  }
  // Vertical O wins
  else if (document.getElementById("r1c1").innerHTML == "O" &&
  document.getElementById("r2c1").innerHTML == "O" &&
  document.getElementById("r3c1").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r1c1").style.backgroundColor = "gold";
    document.getElementById("r2c1").style.backgroundColor = "gold";
    document.getElementById("r3c1").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r1c2").innerHTML == "O" &&
  document.getElementById("r2c2").innerHTML == "O" &&
  document.getElementById("r3c2").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r1c2").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r3c2").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r1c3").innerHTML == "O" &&
  document.getElementById("r2c3").innerHTML == "O" &&
  document.getElementById("r3c3").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r1c3").style.backgroundColor = "gold";
    document.getElementById("r2c3").style.backgroundColor = "gold";
    document.getElementById("r3c3").style.backgroundColor = "gold";
    winningMessage();
  }
  // Diagonal O wins
  else if (document.getElementById("r1c1").innerHTML == "O" &&
  document.getElementById("r2c2").innerHTML == "O" &&
  document.getElementById("r3c3").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r1c1").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r3c3").style.backgroundColor = "gold";
    winningMessage();
  } else if (document.getElementById("r3c1").innerHTML == "O" &&
  document.getElementById("r2c2").innerHTML == "O" &&
  document.getElementById("r1c3").innerHTML == "O") {
    gameStatus = "oWins";
    document.getElementById("r3c1").style.backgroundColor = "gold";
    document.getElementById("r2c2").style.backgroundColor = "gold";
    document.getElementById("r1c3").style.backgroundColor = "gold";
    winningMessage();
  }
  // No winner
  else if (gameStatus == "running" &&
  document.getElementById("r1c1").innerHTML !== "" &&
  document.getElementById("r1c2").innerHTML !== "" &&
  document.getElementById("r1c3").innerHTML !== "" &&
  document.getElementById("r2c1").innerHTML !== "" &&
  document.getElementById("r2c2").innerHTML !== "" &&
  document.getElementById("r2c3").innerHTML !== "" &&
  document.getElementById("r3c1").innerHTML !== "" &&
  document.getElementById("r3c2").innerHTML !== "" &&
  document.getElementById("r3c3").innerHTML !== "" ) {
    gameStatus = "noWinner";
    document.getElementById("r1c1").style.backgroundColor = "gainsboro";
    document.getElementById("r1c2").style.backgroundColor = "gainsboro";
    document.getElementById("r1c3").style.backgroundColor = "gainsboro";
    document.getElementById("r2c1").style.backgroundColor = "gainsboro";
    document.getElementById("r2c2").style.backgroundColor = "gainsboro";
    document.getElementById("r2c3").style.backgroundColor = "gainsboro";
    document.getElementById("r3c1").style.backgroundColor = "gainsboro";
    document.getElementById("r3c2").style.backgroundColor = "gainsboro";
    document.getElementById("r3c3").style.backgroundColor = "gainsboro";
    winningMessage();
  }
}

// Winner Announcement
function winningMessage() {
  if (gameStatus == "xWins") {
    document.getElementById("gameStatus").style.visibility = "visible";
    document.getElementById("gameStatus").innerHTML = "X has won";
    document.getElementById("gameStatus").style.color = "purple";
  } else if (gameStatus == "oWins") {
    document.getElementById("gameStatus").style.visibility = "visible";
    document.getElementById("gameStatus").innerHTML = "O has won";
    document.getElementById("gameStatus").style.color = "darkgreen";
  } else if (gameStatus == "noWinner") {
    document.getElementById("gameStatus").style.visibility = "visible";
    document.getElementById("gameStatus").innerHTML = "No one wins";
    document.getElementById("gameStatus").style.color = "darkblue";
  }
}

// Reset the game and clear the table
function gameReset() {
  counter = 1;
  gameStatus = "running";
  document.getElementById("gameStatus").style.visibility = "hidden";
  document.getElementById("gameStatus").innerHTML = "Status";
  // Clear content
  document.getElementById("r1c1").innerHTML = "";
  document.getElementById("r1c2").innerHTML = "";
  document.getElementById("r1c3").innerHTML = "";
  document.getElementById("r2c1").innerHTML = "";
  document.getElementById("r2c2").innerHTML = "";
  document.getElementById("r2c3").innerHTML = "";
  document.getElementById("r3c1").innerHTML = "";
  document.getElementById("r3c2").innerHTML = "";
  document.getElementById("r3c3").innerHTML = "";
  // Clear background color
  document.getElementById("r1c1").style.backgroundColor = "";
  document.getElementById("r1c2").style.backgroundColor = "";
  document.getElementById("r1c3").style.backgroundColor = "";
  document.getElementById("r2c1").style.backgroundColor = "";
  document.getElementById("r2c2").style.backgroundColor = "";
  document.getElementById("r2c3").style.backgroundColor = "";
  document.getElementById("r3c1").style.backgroundColor = "";
  document.getElementById("r3c2").style.backgroundColor = "";
  document.getElementById("r3c3").style.backgroundColor = "";
}
