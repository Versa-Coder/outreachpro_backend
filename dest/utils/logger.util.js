"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerUtil = void 0;
const createNotifier = (...args) => {
    let data = args.reduce((a, next) => {
        next = typeof next === 'object' ? JSON.stringify(next) : next.toString();
        return a + next.toString() + '\n';
    }, '');
    return {
        alert() { },
        notify() { },
        warn() { },
        write() { },
    };
};
exports.loggerUtil = {
    log(...args) {
        console.log(...args);
        return createNotifier(...args);
    },
    success(...args) {
        console.log('\x1b[32m', ...args, '\x1b[0m');
        return createNotifier(...args);
    },
    info(...args) {
        console.warn('\x1b[33m', ...args, '\x1b[0m');
        return createNotifier(...args);
    },
    warn(...args) {
        console.warn('\x1b[38;5;208m', ...args, '\x1b[0m');
        return createNotifier(...args);
    },
    error(...args) {
        console.error('\x1b[31m', ...args, '\x1b[0m');
        return createNotifier(...args);
    },
};
