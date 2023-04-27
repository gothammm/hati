export const omit = <T extends Object>(
  propsToOmit: Array<keyof T>,
  obj: T
): Partial<T> => {
  return Object.keys(obj).reduce((acc, key) => {
    if (propsToOmit.includes(key)) {
      return acc;
    }
    return Object.assign(acc, { [key]: obj[key] });
  }, {} as Partial<T>);
};
