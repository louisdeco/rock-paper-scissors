function getComputerChoice () {
    // The list of availale option
    let choices = ["Rock", "Paper", "Scissors"];
    // Generate a random integer, either 0, 1, 2
    let randomIndex = Math.floor(Math.random() * 3) 
    // Index the array with the random number to have the computer choice
    let computerChoice = choices[randomIndex]

    // Return the choice of the computer
    return computerChoice
}
