let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice"); //sel select
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
    //rock, paper , scissors
};

const Drawgame = () => {
  
    msg.innerText = "game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win! Your " + userChoice + " beats " + compChoice;
    msg.style.backgroundColor = "green";

  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = "You lose " + compChoice + " beats Your " + userChoice;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userChoice) => {
      
      //Generate computer choice
      const compChoice = genComChoice();
      

      if(userChoice === compChoice) {
        //Draw game
        Drawgame();
      } else 
      {
        let userWin = true;

        if(userChoice == "rock") { //computer  can't be choice rock if rock game was draw
                 //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
               //rock, scissors
               userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
               //rock, paper
               userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
};

choices.forEach((choice) => {     //main
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});