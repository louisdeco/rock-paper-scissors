let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function computerWin () {
    return computerScore++;
}

function humanWin () {
    return humanScore++;
}

function equality () {

}

function getComputerChoice () {
    // The list of availale option
    let choices = ["rock", "paper", "scissors"];
    // Generate a random integer, either 0, 1, 2
    let randomIndex = Math.floor(Math.random() * 3);
    // Index the array with the random number to have the computer choice
    let computerChoice = choices[randomIndex];

    // Return the choice of the computer
    return computerChoice;
}

function compareInputs (computerChoice, humanChoice) {
    // Initialize our scores
    let computerScore = 0;
    let humanScore = 0;
    // Provide with if statements all the possibilites
    if (computerChoice === "rock" && humanChoice === "scissors") {
        return computerWin()
    }

    else if (computerChoice === "paper" && humanChoice == "rock") {
        return computerWin()
    }

    else if (computerChoice === "scissors" && humanChoice === "paper") {
        return computerWin()
    }

    else if (computerChoice === humanChoice) {
    
    }

    else {
        return humanWin()
    }
}

function roundRockPaperScissors (humanChoice) {
    // Get the choice of the computer
    let computerChoice = getComputerChoice()
    // Get the result of the round
    compareInputs(computerChoice, humanChoice)
    gameCount++;
    return computerChoice
}

function displayResults (humanChoice, computerChoice) {
    const result = document.querySelector("#results");
    const choices = document.createElement("p");
    choices.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}.`
    result.appendChild(choices)
    const score = document.createElement("p");
    score.textContent = `Your score is ${humanScore} and the computer's score is ${computerScore} and game count is ${gameCount}.`
    result.appendChild(score)
    if (gameCount == 5) {
        const announce = document.createElement("p")
        if (computerScore > humanScore) {
            announce.textContent = "Computer wins!"
        }
        else if (computerScore === humanScore) {
            announce.textContent = "No one wins!"
        }
        else {
            announce.textContent = "Human wins!"
        }
        result.appendChild(announce)
        gameCount = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = roundRockPaperScissors(humanChoice)
        displayResults(humanChoice, computerChoice)
    })
})