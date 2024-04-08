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
        return humanChoice
    }
    // If user's choice not correct, we display a message
    else {
        return console.log("Chose again.")
    }
}