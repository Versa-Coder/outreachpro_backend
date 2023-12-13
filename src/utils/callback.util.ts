export function doCallBack(cb: Function | unknown, ...args: unknown[]) {
  if (typeof cb === 'function') {
    setTimeout(() => {
      cb(...args);
    }, 0);
  }
}
