console.log("Hello World");

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

console.log(getComputerChoice()); // Outputs either "rock", "paper", or "scissors"

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    
    while (!["rock", "paper", "scissors"].includes(humanChoice)) { 
        humanChoice = prompt("Invalid choice! Please choose rock, paper, or scissors:").toLowerCase();
    }
    
    return humanChoice;
}

// Test the function
console.log(getHumanChoice()); // Will prompt the user and return their choice


let humanScore = 0;  // Changed from `const` to `let`
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;  // Increment humanScore for a win
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;  // Increment computerScore for a loss
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

let playerChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);