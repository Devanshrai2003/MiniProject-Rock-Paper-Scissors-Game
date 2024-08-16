let playerScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg")
const playerScoreCounter = document.querySelector("#player-score")
const comptuerScoreCounter = document.querySelector("#computer-score")

const drawGame = () => {
    message.innerText = "Draw!"
}

const showWinner = (playerWin, playerChoice, computerChoice) => {
    if(playerWin){
        message.innerText = `You win! ${playerChoice} beats ${computerChoice}!`;
        playerScore++;
        playerScoreCounter.innerText = playerScore;
    }else{
        message.innerText = `You lose! ${computerChoice} beats ${playerChoice}!`;
        computerScore++;
        comptuerScoreCounter.innerText = computerScore
    }
}

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    let randomNo = Math.floor(Math.random() * 3);
    return options[randomNo];
}

const runGame = (playerChoice) => {
    const computerChoice = genCompChoice();

    if(playerChoice === computerChoice){
        drawGame();
    }
    else{
        let playerWin = true;
        if(playerChoice === "rock"){
            playerWin = computerChoice === "paper" ? false : true;
        }
       else if(playerChoice === "paper"){
            playerWin = computerChoice === "scissors" ? false : true;
        }
       else if(playerChoice === "scissors"){
            playerWin = computerChoice === "rock" ? false : true;
        }
        showWinner(playerWin, playerChoice, computerChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("id");
        runGame(playerChoice);
    });
});