"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberBetween = exports.randomNumber = void 0;
function randomNumber(max) {
    return randomNumberBetween(0, max);
}
exports.randomNumber = randomNumber;
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomNumberBetween = randomNumberBetween;
