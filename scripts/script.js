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

