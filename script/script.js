let playerRes = document.getElementById("playerResult");
let playerPara = document.createElement("p");
let playerScore = document.createElement("p");
playerScore.textContent = "0";
playerRes.append(playerScore);
playerPara.textContent = "";
playerRes.append(playerPara);
playerPara.style = "display: none";
//

let computerMove = ["Rock", "Paper", "Scissor"];
let computerRes = document.getElementById("computerResult");
let computerPara = document.createElement("p");
let computerScore = document.createElement("p");
computerScore.textContent = "0";
computerRes.append(computerScore);
computerPara.textContent = "";
computerRes.append(computerPara);
computerPara.style = "display: none";

//
let choice = document.getElementById("choice");
let restart = document.getElementById("restart");
restart.style = "display: none";

let result = document.getElementById("result");
result.style = "display: none";
let roundWinner = document.getElementById("round-winner");
roundWinner.style = "display: flex";
//
// style

//
function rock(){
    playerPara.textContent = "Rock";
    computerPlay();

}
function paper(){
    playerPara.textContent = "Paper";
    computerPlay();

}
function scissor(){
    playerPara.textContent = "Scissor";
    computerPlay();

}
function computerPlay(){
    computerPara.textContent = computerMove[Math.floor(Math.random()*computerMove.length)];
    score();
}

function score(){
    if (computerPara.textContent === playerPara.textContent){
        playerScore.textContent = playerScore.textContent;
        computerScore.textContent = computerScore.textContent;
        roundWinner.textContent = "TIE!!!";
    } else if (computerPara.textContent === "Rock" && playerPara.textContent === "Scissor"
    || computerPara.textContent === "Paper" && playerPara.textContent === "Rock"
    || computerPara.textContent === "Scissor" && playerPara.textContent === "Paper"){
        computerScore.textContent++;
        roundWinner.textContent = `You Lose! ${computerPara.textContent} beats ${playerPara.textContent}`;
        if (computerScore.textContent === "5"){
            choice.style = "display: none";
            roundWinner.style = "display: none";
            restart.style = "display: flex";
            result.style = "display: flex";
            result.textContent = "Vito Invincible !!!";
        }
    } else {
        playerScore.textContent++;
        roundWinner.textContent = `You Win! ${playerPara.textContent} beats ${computerPara.textContent}`;
        if (playerScore.textContent === "5"){
            choice.style = "display: none";
            roundWinner.style = "display: none";
            restart.style = "display: flex";
            result.style = "display: flex";
            result.textContent = "You Win !!!";
        }
    }
}

function restartGame(){
    playerPara.textContent = "";
    computerPara.textContent = "";
    roundWinner.textContent = "";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    result.textContent = "";

    restart.style = "display: none";
    result.style = "display: none";
    roundWinner.style = "display: flex";
    choice.style = "display: flex";
}
