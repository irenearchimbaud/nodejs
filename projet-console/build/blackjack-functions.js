import { symbols, numbers } from "./blackjack-variables.js";
import chalk from "chalk";
export function createDeck() {
    let deck = [];
    for (let symbol of symbols) {
        for (let number of numbers) {
            deck.push({ number, symbol });
        }
    }
    deck.sort(() => Math.random() - 0.5);
    return deck;
}
export function isBlackjack(game) {
    return game.length === 2 &&
        game.some(card => card.number === 'A') &&
        game.some(card => ['J', 'Q', 'K', '10'].includes(card.number));
}
export function calculateGameTotal(game) {
    let total = 0;
    let as = 0;
    for (let { number } of game) {
        if (number === 'A') {
            as++;
            total += 11;
        }
        else {
            total += ['J', 'Q', 'K'].includes(number) ? 10 : parseInt(number);
        }
    }
    while (total > 21 && as > 0) {
        total -= 10;
        as--;
    }
    return total;
}
export function showGame(name, game) {
    const coloredCards = game.map(card => {
        const cardText = `[${card.number}${card.symbol}]`;
        return (card.symbol === '♠' || card.symbol === '♣') ? chalk.blue(cardText) : chalk.red(cardText);
    });
    console.log(typeof (coloredCards));
    console.log(`${name}: ` + coloredCards.join(' ') + ` (Total: ${calculateGameTotal(game)})`);
}
