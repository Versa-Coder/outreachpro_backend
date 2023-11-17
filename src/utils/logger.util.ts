const createNotifier = (...args: unknown[]) => {
  let data = args.reduce((a, next) => {
    next = typeof next === 'object' ? JSON.stringify(next) : (next as string).toString();
    return a + (next as object).toString() + '\n';
  }, '');

  return {
    alert() {},

    notify() {},

    warn() {},

    write() {},
  };
};

export const loggerUtil = {
  log(...args: unknown[]) {
    console.log(...args);
    return createNotifier(...args);
  },

  success(...args: unknown[]) {
    console.log('\x1b[32m', ...args, '\x1b[0m');
    return createNotifier(...args);
  },

  info(...args: unknown[]) {
    console.warn('\x1b[33m', ...args, '\x1b[0m');
    return createNotifier(...args);
  },

  warn(...args: unknown[]) {
    console.warn('\x1b[38;5;208m', ...args, '\x1b[0m');
    return createNotifier(...args);
  },

  error(...args: unknown[]) {
    console.error('\x1b[31m', ...args, '\x1b[0m');
    return createNotifier(...args);
  },
};
