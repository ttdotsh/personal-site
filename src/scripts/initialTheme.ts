/** @ts-ignore */
type Theme = "light" | "dark"

function setInitialTheme(theme: Theme) {
  const { classList } = document.documentElement
  if (theme === "light") {
    classList.remove("dark")
    localStorage.setItem("theme", theme)
  } else {
    classList.add("dark")
    localStorage.setItem("theme", theme)
  }
}

function getThemePref(): Theme {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as Theme
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

setInitialTheme(getThemePref())
