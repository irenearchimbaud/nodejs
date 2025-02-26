"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rainbowText = rainbowText;
const chalk_1 = __importDefault(require("chalk"));
function rainbowText(text) {
    const colors = [chalk_1.default.red, chalk_1.default.yellow, chalk_1.default.green, chalk_1.default.cyan, chalk_1.default.blue, chalk_1.default.magenta];
    return text.split('').map((char, i) => colors[i % colors.length](char)).join('');
}
