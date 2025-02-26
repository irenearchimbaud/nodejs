"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeck = createDeck;
exports.isBlackjack = isBlackjack;
exports.calculateGameTotal = calculateGameTotal;
exports.showGame = showGame;
const blackjack_variables_js_1 = require("./blackjack-variables.js");
const chalk_1 = __importDefault(require("chalk"));
function createDeck() {
    let deck = [];
    for (let symbol of blackjack_variables_js_1.symbols) {
        for (let number of blackjack_variables_js_1.numbers) {
            deck.push({ number, symbol });
        }
    }
    deck.sort(() => Math.random() - 0.5);
    return deck;
}
function isBlackjack(game) {
    return game.length === 2 &&
        game.some(card => card.number === 'A') &&
        game.some(card => ['J', 'Q', 'K', '10'].includes(card.number));
}
function calculateGameTotal(game) {
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
function showGame(name, game) {
    const coloredCards = game.map(card => {
        const cardText = `[${card.number}${card.symbol}]`;
        return (card.symbol === '♠' || card.symbol === '♣') ? chalk_1.default.blue(cardText) : chalk_1.default.red(cardText);
    });
    console.log(typeof (coloredCards));
    console.log(`${name}: ` + coloredCards.join(' ') + ` (Total: ${calculateGameTotal(game)})`);
}
