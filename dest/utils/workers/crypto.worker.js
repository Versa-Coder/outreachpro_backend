"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_worker_threads_1 = require("node:worker_threads");
const crypto_util_1 = require("../crypto.util");
node_worker_threads_1.parentPort === null || node_worker_threads_1.parentPort === void 0 ? void 0 : node_worker_threads_1.parentPort.on('message', (message) => {
    switch (message.type) {
        case 'generateERandomString': {
            let info = message.data;
            node_worker_threads_1.parentPort === null || node_worker_threads_1.parentPort === void 0 ? void 0 : node_worker_threads_1.parentPort.postMessage({
                type: message.type,
                data: (0, crypto_util_1.generateERandomStringSync)(info.length, { specialChar: info.specialChar, secured: info.secured }),
            });
        }
        default: {
            break;
        }
    }
});
