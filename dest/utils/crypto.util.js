"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateERandomStringSync = exports.strShuffleSync = exports.generateRandomString = void 0;
const node_worker_threads_1 = require("node:worker_threads");
const node_path_1 = require("node:path");
const math_util_1 = require("./math.util");
const callback_util_1 = require("./callback.util");
const generateRandomString = function (length, options = {
    specialChar: false,
    secured: false,
}, callback) {
    if (length < 1) {
        throw new Error('Length should be greater than one');
    }
    let cb = callback;
    if (typeof options === 'function') {
        cb = options;
        options = {
            specialChar: false,
            secured: false,
        };
    }
    return new Promise((resolve, reject) => {
        let worker = new node_worker_threads_1.Worker((0, node_path_1.join)(__dirname, './workers/crypto.worker.js'));
        worker.postMessage({
            type: 'generateRandomString',
            length,
            options,
        });
        worker.on('message', (data) => {
            (0, callback_util_1.doCallBack)(cb, null, data);
            resolve(data);
            worker.terminate();
        });
        worker.on('error', (err) => {
            (0, callback_util_1.doCallBack)(cb, err, undefined);
            reject(err);
            worker.terminate();
        });
    });
};
exports.generateRandomString = generateRandomString;
function strShuffleSync(str, order = 1) {
    const mixedStrArr = str.split('');
    let j = 0;
    for (let i = 0; i < mixedStrArr.length * order; i++) {
        let randIndex = (0, math_util_1.randomNumber)(mixedStrArr.length - 1);
        let currentChar = mixedStrArr[j];
        mixedStrArr[j] = mixedStrArr[randIndex];
        mixedStrArr[randIndex] = currentChar;
        ++j;
        if (j > mixedStrArr.length - 1) {
            j = 0;
        }
    }
    return mixedStrArr.join('');
}
exports.strShuffleSync = strShuffleSync;
function generateERandomStringSync(length, options = {
    specialChar: false,
    secured: false,
}) {
    const combinations = {
        upper: 'QWERTYUIOPASDFGHJKLZXCVBNM',
        lower: 'qwertyuiopasdfghjklzxcvbnm',
        number: '1234567890',
        special: '@$!^&*()+_<>',
    };
    let split = 1;
    let str = '';
    if (options.secured) {
        split += 2;
    }
    if (options.specialChar) {
        ++split;
    }
    if (split <= 2) {
        let comb = Object.values(combinations);
        if (split === 1) {
            comb.pop();
        }
        else {
            const start = (0, math_util_1.randomNumber)(combinations.special.length - 1);
            str += combinations.special.substring(start, start + Math.ceil(length * 0.1));
        }
        str += strShuffleSync(comb.join('')).substring(0, length - str.length);
    }
    else {
        let updatedComb = Object.values(combinations).slice(0, split);
        updatedComb.forEach((comb) => {
            str += comb.charAt((0, math_util_1.randomNumber)(comb.length - 1));
        });
        const currentStrLen = length - str.length;
        for (let i = 0; i < currentStrLen; i++) {
            let comb = updatedComb[(0, math_util_1.randomNumber)(split - 1)];
            str += comb.charAt((0, math_util_1.randomNumber)(comb.length - 1));
        }
    }
    str = strShuffleSync(str);
    return str;
}
exports.generateERandomStringSync = generateERandomStringSync;
