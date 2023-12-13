import { parentPort } from 'node:worker_threads';
import type {
  GENERATE_RANDOM_STRING_OPTIONS_TYPE,
  GENERATE_RANDOM_STRING_WORKER_METHOD_TYPE,
  WORKER_POST_MESSAGE_TYPE,
} from '../../types';
import { randomNumber } from '../math.util';

function generateERandomString(
  length: number,
  options = {
    specialChar: false,
    secured: false,
  },
) {
  const strUpper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const strLower = 'qwertyuiopasdfghjklzxcvbnm';
  const numbers = '1234567890';
  const specialChars = '@$!^&*()+_<>';

  const mixedStr = `${strUpper}${strLower}${numbers}`;

  let shuffle = function (str: String, order: number = 1): string {
    const mixedStrArr = str.split('');

    for (let i = 0; i < mixedStrArr.length * order; i++) {
      let rand = randomNumber(mixedStr.length - 1);
      let hold = str.charAt(i);
      mixedStrArr[i] = mixedStrArr[rand];
      mixedStrArr[rand] = hold;
    }

    return mixedStrArr.join('');
  };

  if (options.secured) {
  } else {
  }

  return '';
}

parentPort?.on('message', (message: WORKER_POST_MESSAGE_TYPE<unknown>) => {
  switch (message.type) {
    case 'generateERandomString': {
      let info = message.data as GENERATE_RANDOM_STRING_OPTIONS_TYPE;
      parentPort?.postMessage({
        type: message.type,
        data: generateERandomString(info.length, { specialChar: info.specialChar, secured: info.secured }),
      } as WORKER_POST_MESSAGE_TYPE<string>);
    }
    default: {
      break;
    }
  }
});
