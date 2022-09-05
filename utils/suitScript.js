const calculateSuit = (userInput, computerInput) => {
    if (userInput === computerInput) {
        return "draw"
    } else if (userInput === "rock" && computerInput === "scissors") {
        return "win"
    } else if (userInput === "paper" && computerInput === "rock") {
        return "win"
    } else if (userInput === "scissors" && computerInput === "paper") {
        return "win"
    } else {
        return "lose"
    }
}

export default calculateSuit;
