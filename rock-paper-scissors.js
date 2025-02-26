import readline from "readline-sync"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let userCounter = 0
let botCounter = 0

while(userCounter < 3 | botCounter < 3) {
    const botNumber = getRandomIntInclusive(1, 3);

    let botSymbol = "";

    switch (botNumber) {
        case 1:
            botSymbol = "rock"
            break;
        case 2:
            botSymbol = "paper"
            break;
        case 3:
            botSymbol = "scissors"
            break;
    }

    console.log("Welcome in Rock, Paper, Scissors");
    let userSymbol = readline.question("Please choose rock, paper or scissors:");

    // while((userSymbol.toLowerCase() !== "rock") || (userSymbol.toLowerCase() !== "paper") || (userSymbol.toLowerCase() !== "scissors")) {
    //     console.log("Error: please write rock, paper, or scissors");
    //     userSymbol = readline.question("Please choose rock, paper or scissors:");
    // }

    console.log(`Bot choose ${botSymbol}`);

    if (userSymbol.toLowerCase() === botSymbol) {
        console.log("equality between you and the bot")
    }

    if(userSymbol.toLowerCase() === "rock") {
        switch (botSymbol) {
            case "paper":
                console.log("Bot win !")
                botCounter++;
                break;
            case "scissors":
                console.log("you win !")
                userCounter++;
                break;
        }
    }

    if(userSymbol.toLowerCase() === "paper") {
        switch (botSymbol) {
            case "rock":
                console.log("you win !")
                userCounter++;
                break;
            case "scissors":
                console.log("Bot win !")
                botCounter++;
                break;
        }
    }

    if(userSymbol.toLowerCase() === "scissors") {
        switch (botSymbol) {
            case "rock":
                console.log("Bot win !")
                botCounter++;
                break;
            case "paper":
                console.log("you win !")
                userCounter++;
                break;
        }
    }

    console.log(`counter: you:${userCounter} - bot:${botCounter}`)
}