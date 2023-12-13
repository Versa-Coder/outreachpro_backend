"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doCallBack = void 0;
function doCallBack(cb, ...args) {
    if (typeof cb === 'function') {
        setTimeout(() => {
            cb(...args);
        }, 0);
    }
}
exports.doCallBack = doCallBack;
