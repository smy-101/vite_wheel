const prefix = 'just';

const classes = (...args: any): string => {
  const className = new Array<string>();
  args.forEach((arg: any) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      className.push(arg + '');
    } else if (Array.isArray(arg)) {
      className.push(classes(...arg));
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg.hasOwnProperty.call(arg, key) && arg[key]) {
          className.push(key);
        }
      }
    }
  });
  return className.join(' ');
};

export { classes };
