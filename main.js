let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = window.prompt("Enter rock, paper, or scissors");
    if(choice === "rock" ||choice === "paper" ||choice === "scissors"){
        return choice;
    }
    else{
        getHumanChoice();
    }
}

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("computer chose " + computerChoice);
    if(humanChoice == computerChoice){
        console.log("it's a tie " + "you " + humanScore + " computer " + computerScore);
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        console.log("you lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("you lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        console.log("you lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else{
        console.log("you win " + humanChoice + " beats "+ computerChoice);
        humanScore++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    if (humanScore == computerScore){
        console.log("it's a tie: you " + humanScore + " computer " + computerScore);
    }
    else if(humanScore > computerScore){
        console.log("you win: you " + humanScore + " computer " +computerScore);
    }
    else{
        console.log("you lose: you "+ humanScore + " computer " + computerScore);
    }
}

playGame();