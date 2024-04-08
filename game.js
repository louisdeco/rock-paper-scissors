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

function getHumanChoice () {
    // Create a var to store the user's choice
    let humanChoice = prompt("Chose your weapon between Rock, Paper and Scissors! Do not worry, the game is case-insensitive. Beware of spelling though")

    // If user's choice correct, we return it
    if (
        humanChoice.toLowerCase() === "rock" ||
        humanChoice.toLowerCase() === "paper" ||
        humanChoice.toLowerCase() === "scissors"
    ) {
        return humanChoice.toLowerCase()
    }
    // If user's choice not correct, we display a message
    else {
        return console.log("Chose again.")
    }
}

function compareInputs (computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "scissors") {
        return console.log("You lose! Rock beats Scissors.")
    }

    else if (computerChoice === "paper" && humanChoice == "rock") {
        return console.log("You lose! Paper beats Rock.")
    }

    else if (computerChoice === "scissors" && humanChoice === "paper") {
        return console.log("You lose! Scissors beats Paper")
    }

    else if (computerChoice === humanChoice) {
        return console.log("It's a tie!")
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        return console.log("You win! Rock beats Scissors.")
    }

    else if (humanChoice === "paper" && computerChoice == "rock") {
        return console.log("You win! Paper beats Rock.")
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return console.log("You win! Scissors beats Paper")
    }
    else {
        return console.log("Something went wrong.")
    }
}