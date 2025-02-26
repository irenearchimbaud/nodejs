"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const readline_sync_1 = __importDefault(require("readline-sync"));
const blackjack_functions_js_1 = require("./blackjack-functions.js");
const functions_js_1 = require("./functions.js");
function playBlackjack() {
    console.log(`${(0, functions_js_1.rainbowText)("Bienvenue dans le blackjack !")} 🎲 \n`);
    let deck = (0, blackjack_functions_js_1.createDeck)();
    let playerGame = [deck.pop(), deck.pop()];
    let dealerGame = [deck.pop(), deck.pop()];
    while (true) {
        (0, blackjack_functions_js_1.showGame)("Vous", playerGame);
        (0, blackjack_functions_js_1.showGame)("Croupier", dealerGame);
        if ((0, blackjack_functions_js_1.isBlackjack)(dealerGame) && !(0, blackjack_functions_js_1.isBlackjack)(playerGame)) {
            console.log(`\n 😢 ${chalk_1.default.red("Blackjack ! Le croupier a gagné !")}`);
            return;
        }
        if ((0, blackjack_functions_js_1.calculateGameTotal)(playerGame) > 21) {
            console.log("\n Tu as dépassé 21 ! Perdu !");
            console.log(`\n 😢 ${chalk_1.default.red("Le croupier a gagné !")}`);
            return;
        }
        if ((0, blackjack_functions_js_1.isBlackjack)(playerGame)) {
            break;
        }
        let choice = readline_sync_1.default.question("\n Tirer une carte (t) ou rester (r) ? ").toLowerCase();
        if (choice === 't') {
            playerGame.push(deck.pop());
        }
        else if (choice === 'r') {
            break;
        }
    }
    console.log(`\n ${chalk_1.default.blue("•")} Tour du croupier...`);
    while ((0, blackjack_functions_js_1.calculateGameTotal)(dealerGame) < 16 || (0, blackjack_functions_js_1.isBlackjack)(dealerGame)) {
        dealerGame.push(deck.pop());
    }
    (0, blackjack_functions_js_1.showGame)("Croupier", dealerGame);
    let playerScore = (0, blackjack_functions_js_1.calculateGameTotal)(playerGame);
    let dealerScore = (0, blackjack_functions_js_1.calculateGameTotal)(dealerGame);
    if ((0, blackjack_functions_js_1.isBlackjack)(dealerGame) && !(0, blackjack_functions_js_1.isBlackjack)(playerGame)) {
        console.log(`\n 😢 ${chalk_1.default.red("Blackjack du croupier, vous perdez !")}`);
    }
    else if ((0, blackjack_functions_js_1.isBlackjack)(playerGame) && !(0, blackjack_functions_js_1.isBlackjack)(dealerGame)) {
        console.log(`\n 🎉 ${(0, functions_js_1.rainbowText)("Blackjack ! Vous gagnez !")}`);
    }
    else if (dealerScore > 21 || playerScore > dealerScore) {
        console.log(`\n 🎉 ${(0, functions_js_1.rainbowText)("Bravo, c'est gagné !")}`);
    }
    else if (playerScore < dealerScore) {
        console.log(`\n 😢 ${chalk_1.default.red("Vous perdez. Le croupier a gagné !")}`);
    }
    else {
        console.log(chalk_1.default.green(`\n Égalité !`));
    }
}
playBlackjack();
