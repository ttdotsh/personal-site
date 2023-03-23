export type Theme = "light" | "dark"

export function getThemePref(): Theme {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as Theme
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function setDocTheme(theme: Theme): void {
  const root = document.documentElement
  theme === "light" ? root.classList.remove("dark") : root.classList.add("dark")
}
