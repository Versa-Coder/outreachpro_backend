"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_worker_threads_1 = require("node:worker_threads");
const math_util_1 = require("../math.util");
function generateERandomString(length, options = {
    specialChar: false,
    secured: false,
}) {
    const strUpper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const strLower = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const specialChars = '@$!^&*()+_<>';
    const mixedStr = `${strUpper}${strLower}${numbers}`;
    let shuffle = function (str, order = 1) {
        const mixedStrArr = str.split('');
        for (let i = 0; i < mixedStrArr.length * order; i++) {
            let rand = (0, math_util_1.randomNumber)(mixedStr.length - 1);
            let hold = str.charAt(i);
            mixedStrArr[i] = mixedStrArr[rand];
            mixedStrArr[rand] = hold;
        }
        return mixedStrArr.join('');
    };
    if (options.secured) {
    }
    else {
    }
    return '';
}
node_worker_threads_1.parentPort === null || node_worker_threads_1.parentPort === void 0 ? void 0 : node_worker_threads_1.parentPort.on('message', (message) => {
    switch (message.type) {
        case 'generateERandomString': {
            let info = message.data;
            node_worker_threads_1.parentPort === null || node_worker_threads_1.parentPort === void 0 ? void 0 : node_worker_threads_1.parentPort.postMessage({
                type: message.type,
                data: generateERandomString(info.length, { specialChar: info.specialChar, secured: info.secured }),
            });
        }
        default: {
            break;
        }
    }
});
