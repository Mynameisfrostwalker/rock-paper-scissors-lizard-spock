let playerScore = 0;
let computerScore = 0;
let playerDecision;
let computerDecision;
let turns = 0;

const audio = document.querySelector("audio.creepy");
const victory = document.querySelector("audio.victory");
const defeat = document.querySelector("audio.defeat");
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
const thirdpage = document.querySelector(".thirdpage");
const hand = document.querySelector(".righthand");
const chant = document.querySelector(".chant");
const scores = document.querySelector(".scores");
const fourthPage = document.querySelector(".fourthpage");
const replay = document.querySelector(".replay");


const array = ["Rock", "Paper", "Scissors", "Lizard", "Spock!"];

const textArray = [
    "In the year 2055, humanity finally arrived on Mars.", 
    "Decades of global human pollution, had rendered the earth uninhabitable",
    "The land was barren and the seas, desolate.",
    "In search of a new home, humanity arrived in droves on Mars.",
    "And for a while, all was well...",
    "Humanity entered its second golden age, it had learned from its mistakes.",
    "Peace and prosperity reigned, learning and culture florished",
    "Until tragedy struck",
    "The Unknowns, visitors from a distant world far beyond the reaches of our galaxies had awoken.",
    "They had wiped out the Martians, and for eons had slept underneath the surface of Mars.",
    "And now they were going to destroy humanity like the destroyed Martian civilization at its peak.",
    "Only beating them in a first to five game of rock, paper, scissors, lizzard, spock could prevent that fate",
    "Do you have what it takes to save humanity?"
]

let textLine = 0;
let sentenceIndex = 0;
let content = "";
let timer = 0;

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
            computerChoice = "lizard";
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
        if(computerSelection === "lizard") {
            playerScore++
            return "You win this round! Scissors decapacitates lizard!"
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
        if(computerSelection === "lizard") {
            playerScore++
            return "You win this round! Rock crushes lizard!"
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
        if(computerSelection === "lizard") {
            computerScore++
            return "You lose this round. Lizard eats paper!"
        }
        if(computerSelection === "spock") {
            playerScore++
            return "You win this round! Paper disproves spock!"
        }
    }

    if (playerChoice === "lizard" ) {
        if (computerSelection === "scissors" ) {
            computerScore++
            return "You lose this round. Scissors decapacitates lizard!"
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
        if(computerSelection === "lizard") {
            computerScore++
            return "You lose this round. Lizard poisons spock!"
        }
        if(computerSelection === "paper") {
            computerScore++
            return "You lose this round. Paper disproves spock!"
        }
    }

}

function showWeaponPage() {
    thirdpage.classList.add("nodisplay");
    secondPage.classList.remove("nodisplay");
    weapon.classList.add("nodisplay");
    scores.classList.remove("nodisplay");
    scores.children[0].textContent = `Player score: ${playerScore}`
    scores.children[1].textContent = `Computer score: ${computerScore}`
}

function endGame() {
    thirdpage.classList.add("nodisplay");
    fourthPage.classList.remove("nodisplay");
    audio.pause()
    if(playerScore > computerScore) {
        fourthPage.children[0].classList.remove("nodisplay");
        victory.play()
    } else {
        fourthPage.children[1].classList.remove("nodisplay");
        defeat.play()
    }
    playerScore = 0;
    computerScore = 0;
    playerDecision;
    computerDecision;
    turns = 0;
    textLine = 0;
    sentenceIndex = 0;
    content = "";
    timer = 0;
}

function game(playerChoice, computerChoice) {
    turns++
    let result = playRound(playerChoice, computerChoice);
    chant.children[0].textContent = result;
    if(playerScore === 5 || computerScore === 5) {
        endGame()
        return;
    }
    setTimeout("showWeaponPage()", 3000);
}

const displayPage = () => {
    firstContainer.classList.remove("hidden");
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

const playSound = () => {
    setTimeout(() => {
    audio.play();
    firstPage.classList.add("nodisplay");
    secondPage.classList.remove("nodisplay");
    setTimeout(typeWriter(), 1000)
    }, 1000)
}

const displayCard = () => {
    typediv.classList.add("nodisplay");
    cards.classList.remove("nodisplay");
    weapon.classList.remove("nodisplay");
    deck[0].classList.remove("hidecard"); 
}

const showNextCard = (e) => {
    if([...e.target.classList][0]=== "spock") {
        weapon.classList.remove("hidden");
        return;
    }
    e.target.nextElementSibling.classList.remove("hidecard");
}

const displayChant = () => {
    chant.children[0].textContent = array[timer++]
    if(timer >= array.length) {
        return;
    }
    setTimeout("displayChant()", 1200)
}

const startChant = () => {
    chant.classList.remove("nodisplay");  
    setTimeout("displayChant()", 600);
}

const playGame = (e) => {
    timer = 0;
    hand.children[0].classList.remove(`fa-hand-${playerDecision}-o`)
    hand.nextElementSibling.children[0].classList.remove(`fa-hand-${computerDecision}-o`)
    chant.children[0].textContent = ""
    playerDecision = e.currentTarget.classList[0];
    computerDecision = computerPlay()
    secondPage.classList.add("nodisplay");
    thirdpage.classList.remove("nodisplay");
    hand.children[0].classList.add("fa-hand-rock-o")
    hand.nextElementSibling.children[0].classList.add("fa-hand-rock-o")
}


const displayResult = () => {
    hand.children[0].classList.remove("fa-hand-rock-o")
    hand.nextElementSibling.children[0].classList.remove("fa-hand-rock-o")
    hand.children[0].classList.add(`fa-hand-${playerDecision}-o`)
    hand.nextElementSibling.children[0].classList.add(`fa-hand-${computerDecision}-o`)
    setTimeout("game(playerDecision, computerDecision)", 1000)
}

const playNewGame = () => {
    fourthPage.classList.add("nodisplay");
    if(fourthPage.children[0].classList.contains("nodisplay")){
        fourthPage.children[1].classList.add("nodisplay");
        defeat.pause()
    }else {
        fourthPage.children[0].classList.add("nodisplay");
        victory.pause()
    }
    audio.play()
    secondPage.classList.remove("nodisplay");
    weapon.classList.remove("nodisplay");
    scores.classList.add("nodisplay");
}

hand.addEventListener("animationend", displayResult)

hand.addEventListener("animationstart", startChant);

video.addEventListener("ended", displayPage);

playButton.addEventListener("click", playSound);

deck.forEach((card) => {
    card.addEventListener("animationend", showNextCard);
    card.addEventListener("click", playGame);
})

replay.addEventListener("click", playNewGame)


