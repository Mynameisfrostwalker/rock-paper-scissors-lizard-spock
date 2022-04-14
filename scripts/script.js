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
        }
        
        else {
            console.log(
                playRound(playerChoice, computerPlay()), 
                `Player Score: ${playerScore}`, 
                `Computer Score: ${computerScore}`,
                 `Turn: ${turns}`
                );
            turns = (playerScore >= computerScore) ? playerScore : computerScore;
        }
    }
    
    (playerScore > computerScore) ? console.log("You win!") : console.log("You lose")
}

//game();

const audio = document.querySelector("audio.creepy");
const body = document.querySelector("body");
const video = document.querySelector("video");
const firstContainer = document.querySelector(".first-container");
const playButton = document.querySelector(".play-button")
const firstPage = document.querySelector(".firstpage")
const secondPage = document.querySelector(".secondpage");
const story = document.querySelector("p.story");
const cards = document.querySelector(".cards");
const typediv= document.querySelector(".typewriter");
const deck = [...document.querySelectorAll(".card")];
const weapon = document.querySelector(".weapon");

const textArray = [
    "In the year 2055, humanity finally arrived on Mars.", 
    "Decades of global human pollution, had rendered the earth uninhabitable",
    /*
    "The land was barren and the seas, desolate.",
    "In search of a new home, humanity arrived in droves on Mars.",
    "And for a while, all was well...",
    "Humanity entered its second golden age, it had learned from its mistakes.",
    "Peace and prosperity reigned, learning and culture florished",
    "Until tragedy struck",
    "The Unknowns, visitors from a distant world far beyond the reaches of our galaxies had awoken.",
    "They had wiped out the Martians, and for eons had slept underneath the surface of Mars.",
    "And now they were going to destroy humanity like the destroyed Martian civilization at its peak.",
    "Only beating them in a game of rock, paper, scissors, lizzard, spock could prevent that fate",
    "Do you have what it takes to save humanity?"
    */
]

let textLine = 0;
let sentenceIndex = 0;
let content = "";

const displayCard = () => {
    typediv.classList.add("nodisplay");
    cards.classList.remove("nodisplay");
    weapon.classList.remove("nodisplay");
   deck[0].classList.remove("hidecard"); 
}

const typeWriter = () => {
    if(textLine === textArray.length) {
        setTimeout("displayCard()", 500);
        return;
    }
    const arrLine = textArray[textLine];
    if(content.length > 1) {
        content = content.substring(0, content.length - 1)
    }
    content += arrLine.substring(sentenceIndex, ++sentenceIndex) + "_";

    story.textContent = content;

   
    if(sentenceIndex === arrLine.length) {
        content = "";
        sentenceIndex = 0;
        textLine++
        setTimeout("typeWriter()", 500)
    }
    else {
        setTimeout("typeWriter()", 100) 
    }
   
}


const displayPage = () => {
    firstContainer.classList.remove("hidden");
}

const playSound = () => {
    setTimeout(() => {
    audio.play();
    firstPage.classList.add("nodisplay");
    secondPage.classList.remove("nodisplay");
    setTimeout(typeWriter(), 1000)
    }, 1000)
}

video.addEventListener("ended", displayPage);

playButton.addEventListener("click", playSound);

const playGame = () => {

}

const showNextCard = (e) => {
    if([...e.target.classList][0]=== "spock") {
        weapon.classList.remove("hidden");
        return;
    }
    e.target.nextElementSibling.classList.remove("hidecard");
}

deck.forEach((card) => {
    card.addEventListener("animationend", showNextCard);
    card.addEventListener("click", playGame);
})


