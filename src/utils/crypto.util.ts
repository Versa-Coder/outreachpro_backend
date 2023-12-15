import { Worker } from 'node:worker_threads';
import { join as pathJoin } from 'node:path';
import { GENERATE_RANDOM_STRING_METHOD_TYPE } from '../types';
import { randomNumber } from './math.util';
import { COMMON_CALLBACK_TYPE } from '../types/common.type';
import { doCallBack } from './callback.util';

export const generateRandomString: GENERATE_RANDOM_STRING_METHOD_TYPE = function (
  length: number,
  options = {
    specialChar: false,
    secured: false,
  },
  callback: COMMON_CALLBACK_TYPE | undefined,
) {
  if (length < 1) {
    throw new Error('Length should be greater than one');
  }

  let cb = callback;
  if (typeof options === 'function') {
    cb = options as COMMON_CALLBACK_TYPE;
    options = {
      specialChar: false,
      secured: false,
    };
  }

  return new Promise((resolve, reject) => {
    let worker = new Worker(pathJoin(__dirname, './workers/crypto.worker.js'));

    worker.postMessage({
      type: 'generateRandomString',
      length,
      options,
    });

    worker.on('message', (data: string) => {
      doCallBack(cb, null, data);
      resolve(data);
      worker.terminate();
    });

    worker.on('error', (err) => {
      doCallBack(cb, err, undefined);
      reject(err);
      worker.terminate();
    });
  });
};

export function strShuffleSync(str: String, order: number = 1): string {
  const mixedStrArr = str.split('');
  let j = 0;

  for (let i = 0; i < mixedStrArr.length * order; i++) {
    let randIndex = randomNumber(mixedStrArr.length - 1);
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

export function generateERandomStringSync(
  length: number,
  options = {
    specialChar: false,
    secured: false,
  },
) {
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
    } else {
      const start = randomNumber(combinations.special.length - 1);
      str += combinations.special.substring(start, start + Math.ceil(length * 0.1));
    }

    str += strShuffleSync(comb.join('')).substring(0, length - str.length);
  } else {
    let updatedComb = Object.values(combinations).slice(0, split);

    updatedComb.forEach((comb) => {
      str += comb.charAt(randomNumber(comb.length - 1));
    });

    const currentStrLen = length - str.length;
    for (let i = 0; i < currentStrLen; i++) {
      let comb = updatedComb[randomNumber(split - 1)];
      str += comb.charAt(randomNumber(comb.length - 1));
    }
  }

  str = strShuffleSync(str);

  return str;
}
