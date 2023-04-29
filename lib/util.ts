export const omit = <T extends Object>(
  propsToOmit: Array<keyof T>,
  obj: T
): Partial<T> => {
  return (Object.keys(obj) as Array<keyof T>).reduce((acc, key) => {
    if (propsToOmit.includes(key)) {
      return acc;
    }
    return Object.assign(acc, { [key]: obj[key] });
  }, {} as Partial<T>);
};

export const applyTheme = (theme: "dark" | "light") => {
  document.getElementsByTagName("html")[0]?.removeAttribute("class");
  document.getElementsByTagName("html")[0]?.classList?.add(theme);
};
