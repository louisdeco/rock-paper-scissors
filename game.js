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
    // Initialize our scores
    let computerScore = 0;
    let humanScore = 0;
    // Provide with if statements all the possibilites
    if (computerChoice === "rock" && humanChoice === "scissors") {
        return [
            console.log("You lose! Rock beats Scissors."),
            computerScore = 1,
            humanScore = 0
        ]
    }

    else if (computerChoice === "paper" && humanChoice == "rock") {
        return [
            console.log("You lose! Paper beats Rock."),
            computerScore = 1,
            humanScore = 0
        ]
    }

    else if (computerChoice === "scissors" && humanChoice === "paper") {
        return [
            console.log("You lose! Scissors beats Paper."),
            computerScore = 1,
            humanScore = 0
        ]
    }

    else if (computerChoice === humanChoice) {
        return [
            console.log("It's a tie!"),
            computerScore = 0,
            humanScore = 0
        ]
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        return [
            console.log("You win! Rock beats Scissors."),
            computerScore = 0,
            humanScore = 1
        ]
    }

    else if (humanChoice === "paper" && computerChoice == "rock") {
        return [
            console.log("You win! Paper beats Rock."),
            computerScore = 0,
            humanChoice = 1
        ]
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        return [
            console.log("You win! Scissors beats Paper."),
            computerScore = 0,
            humanScore = 1
        ]
    }
    else {
        return [
            console.log("Something went wrong."),
            computerScore = 0,
            humanScore = 0
        ]
    }
}

function roundRockPaperScissors () {
    // Get the choices
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()

    // Get the message and the scores
    let resultArray = compareInputs(computerChoice, humanChoice)
    
    // Log the message for a round
    console.log(resultArray[0])
    return resultArray
}

function playGame () {
    // Initialise the score
    let humanScore = 0;
    let computerScore = 0

    // Play five rounds and increment scores
    let resultArray = roundRockPaperScissors()
    computerScore += resultArray[1]
    humanScore += resultArray[2]

    resultArray = roundRockPaperScissors()
    computerScore += resultArray[1]
    humanScore += resultArray[2]

    resultArray = roundRockPaperScissors()
    computerScore += resultArray[1]
    humanScore += resultArray[2]

    resultArray = roundRockPaperScissors()
    computerScore += resultArray[1]
    humanScore += resultArray[2]

    resultArray = roundRockPaperScissors()
    computerScore += resultArray[1]
    humanScore += resultArray[2]

    // Announce the winner
    if (computerScore > humanScore) {
        console.log("The winner is the computer!")
    }
    else if (computerScore === humanScore) {
        console.log("No one wins.")
    }
    else {
        console.log("Human superiority.")
    }
    console.log(`Human score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
}

playGame()