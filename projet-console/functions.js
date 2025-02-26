import chalk from "chalk";

export function rainbowText(text) {
    const colors = [chalk.red, chalk.yellow, chalk.green, chalk.cyan, chalk.blue, chalk.magenta];
    
    return text.split('').map((char, i) => colors[i % colors.length](char)).join('');
}