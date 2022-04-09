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
            return "You win this round! Scissors cuts paper!"
        }
        if(computerSelection === "rock") {
            return "You lose this round. Rock crushes scissors!"
        }
        if(computerSelection === "lizzard") {
            return "You win this round! Scissors decapacitates lizzard!"
        }
        if(computerSelection === "spock") {
            return "You lose this round. Spock smashes scissors!"
        }
    }

    if (playerChoice === "rock" ) {
        if (computerSelection === "paper" ) {
            return "You lose this round. Paper covers rock!"
        }
        if(computerSelection === "scissors") {
            return "You win this round! Rock crushes scissors!"
        }
        if(computerSelection === "lizzard") {
            return "You win this round! Rock crushes lizzard!"
        }
        if(computerSelection === "spock") {
            return "You lose this round. Spock vaporizes rock!"
        }
    }

    if (playerChoice === "paper" ) {
        if (computerSelection === "scissors" ) {
            return "You lose this round. Scissors cuts paper!"
        }
        if(computerSelection === "rock") {
            return "You win this round! Paper covers rock!"
        }
        if(computerSelection === "lizzard") {
            return "You lose this round. Lizzard eats paper!"
        }
        if(computerSelection === "spock") {
            return "You win this round! Paper disproves spock!"
        }
    }

    if (playerChoice === "lizzard" ) {
        if (computerSelection === "scissors" ) {
            return "You lose this round. Scissors decapacitates lizzard!"
        }
        if(computerSelection === "rock") {
            return "You lose this round. Rock crushes lizzard!"
        }
        if(computerSelection === "paper") {
            return "You win this round! Lizzard eats paper!"
        }
        if(computerSelection === "spock") {
            return "You win this round! Lizzard poisons spock!"
        }
    }

    if (playerChoice === "spock" ) {
        if (computerSelection === "scissors" ) {
            return "You win this round! Spock smashes scissors!"
        }
        if(computerSelection === "rock") {
            return "You win this round! Spock vaporizes rock!"
        }
        if(computerSelection === "lizzard") {
            return "You lose this round. Lizzard poisons spock!"
        }
        if(computerSelection === "paper") {
            return "You lose this round. Paper disproves spock!"
        }
    }

}