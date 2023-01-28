function getComputerChoice(){
    const result = Math.floor(Math.random()* 3)+1
    if (result == 1){
        return "ROCK";
    }
    else if (result == 2){
        return "PAPER";
    }
    return "SCISSORS"
}
function playRound(playerSelection){
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
        return ["Draw", 0];
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return ["You Lose Paper beats Rock", -1];
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return ["You Win Rock beats Scissors", 1];
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        return ["You Win Paper Beats Rock", 1];
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return ["You Loose Scissors beat Paper", -1];
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return ["You Lose Rock beats Scissors", -1];
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return ["You Win Scissors beat Paper", 1];
    }
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score');
let score = 0;
let count = 0;
scoreDiv.textContent = score;

function buttonEvent(e){

    playerChoice = this.classList.value;
    result = playRound(playerChoice);
    resultDiv.textContent = result[0];
    score = score + result[1];
    scoreDiv.textContent = score;
    count++;
    if (count >= 5){
        buttons.forEach(button => button.removeEventListener('click', buttonEvent));
        if (score > 0){
            resultDiv.textContent = "You win with a score of " + score;
            scoreDiv.textContent = "";
        }
        if (score < 0){
            resultDiv.textContent = "You Loose with a score of " + score;
            scoreDiv.textContent = "";
        }
        if (score == 0){
            resultDiv.textContent = "You Draw";
            scoreDiv.textContent = "";
        }
    }
}
buttons.forEach(button => button.addEventListener('click', buttonEvent));

