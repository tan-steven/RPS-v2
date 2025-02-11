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

function playRound(humanChoice){
    console.log(humanChoice);
    const computerChoice = getComputerChoice();
    console.log("computer chose " + computerChoice);
    if(humanChoice == computerChoice){
        results.textContent = "Tied: You " + humanScore + " Computer " + computerScore;
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        results.textContent = computerChoice + " beats " + humanChoice + ": You " + humanScore + " Computer " + computerScore;
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
        results.textContent = computerChoice + " beats " + humanChoice + ": You " + humanScore + " Computer " + computerScore; 
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
        results.textContent = computerChoice + " beats " + humanChoice + ": You " + humanScore + " Computer " + computerScore;
    }
    else{
        humanScore++;
        results.textContent = humanChoice + " beats "+ computerChoice + ": You " + humanScore + " Computer " + computerScore;
    }

    if(humanScore == 5 & humanScore > computerScore){
        results.textContent = "You win!" + " You " + humanScore + " Computer " + computerScore
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5 & humanScore < computerScore){
        results.textContent = "You lose!" + " You " + humanScore + " Computer " + computerScore
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == humanScore & computerScore == 5){
        results.textContent = "It's a Tie!" + " You " + humanScore + " Computer " + computerScore
        humanScore = 0;
        computerScore = 0;
    }
}

const body = document.querySelector("body");
const btn = document.querySelectorAll("button");

btn.forEach((button) =>{
    button.addEventListener("click", () =>{
        playRound(button.textContent);
    });
});

const results = document.createElement("div");

body.appendChild(results);
