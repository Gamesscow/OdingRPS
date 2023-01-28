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
        return "Draw";
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return "You Lose Paper beats Rock";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You Win Rock beats Scissors"
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "You Win Paper Beats Rock";
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return "You Loose Scissors beat Paper"
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return "You Lose Rock beats Scissors";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You Win Scissors beat Paper"
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(event){
    playerChoice = this.classList.value;
    console.log(playRound(playerChoice));

}));

