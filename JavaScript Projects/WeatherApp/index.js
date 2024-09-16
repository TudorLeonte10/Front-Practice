const choices=[`rock`, `paper`, `scissors`];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

   const compChoice = choices[Math.floor(Math.random()*3)];
   let result = "";

   if(playerChoice === compChoice){
      result = "It's a tie!";
   }
   else{
      switch(playerChoice){
         case "rock":
            result = (compChoice === "scissors") ? "You win!" : "You lose!";
            break;
         case "paper":
            result = (compChoice === "rock") ? "You win!" : "You lose!";
            break;
         case "scissors":
            result = (compChoice === "paper") ? "You win!" : "You lose!";
            break;
      }
   }

   playerDisplay.textContent = `Player: ${playerChoice}`;
   computerDisplay.textContent = `Computer: ${compChoice}`;
   resultDisplay.textContent = result;

   resultDisplay.classList.remove("greenText", "redText");

   switch(result){
      case "You win!":
         resultDisplay.classList.add("greenText");
         playerScore++;
         playerScoreDisplay.textContent = playerScore;
         break;
      case "You lose!":
         resultDisplay.classList.add("redText");
         computerScore++;
         computerScoreDisplay.textContent = computerScore;
         break;
   }
}