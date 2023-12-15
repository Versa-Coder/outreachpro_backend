import { parentPort } from 'node:worker_threads';
import type { GENERATE_RANDOM_STRING_OPTIONS_TYPE, WORKER_POST_MESSAGE_TYPE } from '../../types';
import { generateERandomStringSync, generateRandomString } from '../crypto.util';

parentPort?.on('message', (message: WORKER_POST_MESSAGE_TYPE<unknown>) => {
  switch (message.type) {
    case 'generateERandomString': {
      let info = message.data as GENERATE_RANDOM_STRING_OPTIONS_TYPE;
      parentPort?.postMessage({
        type: message.type,
        data: generateERandomStringSync(info.length, { specialChar: info.specialChar, secured: info.secured }),
      } as WORKER_POST_MESSAGE_TYPE<string>);
    }
    default: {
      break;
    }
  }
});
