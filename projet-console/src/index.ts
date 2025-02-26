import chalk from "chalk";
import readline from "readline-sync"
import { createDeck, isBlackjack, calculateGameTotal, showGame } from "./blackjack-functions";
import { rainbowText } from "./functions";
import { Deck } from "./deck-interface";

function playBlackjack(): void {
    console.log(`${rainbowText("Bienvenue dans le blackjack !")} 🎲 \n`);

    let deck: Deck[] = createDeck();

    let playerGame: Deck[] = [deck.pop() as Deck, deck.pop() as Deck];
    let dealerGame: Deck[] = [deck.pop() as Deck, deck.pop() as Deck];

    while (true) {
        showGame("Vous", playerGame);
        showGame("Croupier", dealerGame);

        if(isBlackjack(dealerGame) && !isBlackjack(playerGame)) {
            console.log(`\n 😢 ${chalk.red("Blackjack ! Le croupier a gagné !")}`)
            return;
        }

        if (calculateGameTotal(playerGame) > 21) {
            console.log("\n Tu as dépassé 21 ! Perdu !");
            console.log(`\n 😢 ${chalk.red("Le croupier a gagné !")}`)
            return;
        }

        if (isBlackjack(playerGame)) {
            break;
        }

        let choice: string = readline.question("\n Tirer une carte (t) ou rester (r) ? ").toLowerCase();
        if (choice === 't') {
            playerGame.push(deck.pop() as Deck);
        } else if (choice === 'r') {
            break;
        }
    }

    console.log(`\n ${chalk.blue("•")} Tour du croupier...`);
    while (calculateGameTotal(dealerGame) < 16 || isBlackjack(dealerGame)) {
        dealerGame.push(deck.pop() as Deck);
    }
    showGame("Croupier", dealerGame);

    let playerScore: number = calculateGameTotal(playerGame);
    let dealerScore: number = calculateGameTotal(dealerGame);

    if (isBlackjack(dealerGame) && !isBlackjack(playerGame)) {
        console.log(`\n 😢 ${chalk.red("Blackjack du croupier, vous perdez !")}`);
    } else if (isBlackjack(playerGame) && !isBlackjack(dealerGame)) {
        console.log(`\n 🎉 ${rainbowText("Blackjack ! Vous gagnez !")}`);
    } else if (dealerScore > 21 || playerScore > dealerScore) {
        console.log(`\n 🎉 ${rainbowText("Bravo, c'est gagné !")}`);
    } else if (playerScore < dealerScore) {
        console.log(`\n 😢 ${chalk.red("Vous perdez. Le croupier a gagné !")}`);
    } else {
        console.log(chalk.green(`\n Égalité !`));
    }
}

playBlackjack();