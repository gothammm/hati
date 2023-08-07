export const applyTheme = (theme: "dark" | "light") => {
  document.getElementsByTagName("html")[0]?.removeAttribute("class");
  document.getElementsByTagName("html")[0]?.classList?.add(theme);
};
