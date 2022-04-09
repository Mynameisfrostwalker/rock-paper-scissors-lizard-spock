let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomValue = Math.floor(Math.random() * 5);
    let computerChoice;
    switch (randomValue) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "lizzard";
            break;
        case 4:
            computerChoice = "spock";
            break;
        default:
            computerChoice = ""
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        return "It's a tie!"
    }

    if (playerChoice === "scissors" ) {
        if (computerSelection === "paper" ) {
            playerScore++
            return "You win this round! Scissors cuts paper!"
        }
        if(computerSelection === "rock") {
            computerScore++
            return "You lose this round. Rock crushes scissors!"
        }
        if(computerSelection === "lizzard") {
            playerScore++
            return "You win this round! Scissors decapacitates lizzard!"
        }
        if(computerSelection === "spock") {
            computerScore++
            return "You lose this round. Spock smashes scissors!"
        }
    }

    if (playerChoice === "rock" ) {
        if (computerSelection === "paper" ) {
            computerScore++
            return "You lose this round. Paper covers rock!"
        }
        if(computerSelection === "scissors") {
            playerScore++
            return "You win this round! Rock crushes scissors!"
        }
        if(computerSelection === "lizzard") {
            playerScore++
            return "You win this round! Rock crushes lizzard!"
        }
        if(computerSelection === "spock") {
            computerScore++
            return "You lose this round. Spock vaporizes rock!"
        }
    }

    if (playerChoice === "paper" ) {
        if (computerSelection === "scissors" ) {
            computerScore++
            return "You lose this round. Scissors cuts paper!"
        }
        if(computerSelection === "rock") {
            playerScore++
            return "You win this round! Paper covers rock!"
        }
        if(computerSelection === "lizzard") {
            computerScore++
            return "You lose this round. Lizzard eats paper!"
        }
        if(computerSelection === "spock") {
            playerScore++
            return "You win this round! Paper disproves spock!"
        }
    }

    if (playerChoice === "lizzard" ) {
        if (computerSelection === "scissors" ) {
            computerScore++
            return "You lose this round. Scissors decapacitates lizzard!"
        }
        if(computerSelection === "rock") {
            computerScore++
            return "You lose this round. Rock crushes lizzard!"
        }
        if(computerSelection === "paper") {
            playerScore++
            return "You win this round! Lizzard eats paper!"
        }
        if(computerSelection === "spock") {
            playerScore++
            return "You win this round! Lizzard poisons spock!"
        }
    }

    if (playerChoice === "spock" ) {
        if (computerSelection === "scissors" ) {
            playerScore++
            return "You win this round! Spock smashes scissors!"
        }
        if(computerSelection === "rock") {
            playerScore++
            return "You win this round! Spock vaporizes rock!"
        }
        if(computerSelection === "lizzard") {
            computerScore++
            return "You lose this round. Lizzard poisons spock!"
        }
        if(computerSelection === "paper") {
            computerScore++
            return "You lose this round. Paper disproves spock!"
        }
    }

}

function game() {
    let turns = 0;
    while(turns < 5) {
        let playerChoice = prompt("Rock, paper, scissors, lizzard, spock!!!", "");
        if(playerChoice === "") {
            console.log("Game cancelled");
            return;
        }else {
            console.log(playRound(playerChoice, computerPlay()), `Player Score: ${playerScore}`, `Computer Score: ${computerScore}`, turns)
            turns = (playerScore >= computerScore) ? playerScore : computerScore;
        }
    }
    
    (playerScore > computerScore) ? console.log("You win!") : console.log("You lose")
}

game();