import { useState } from "react";

export type Theme = "netural" | "light" | "dark";

function getTheme(): Theme {
  var theme: Theme = "netural";
  var localTheme = getThemeFromLocalStorage();

  if (localTheme) {
    theme = localTheme;
  } else {
    const perferDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (perferDarkTheme) {
      theme = "dark";
    }
  }

  document.documentElement.setAttribute("data-theme", theme);
  return theme;
}

function getThemeFromLocalStorage(): Theme {
  return localStorage.getItem("theme") as Theme;
}

export default function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(getTheme());

  function updateTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme);
  }

  return [theme, updateTheme];
}
