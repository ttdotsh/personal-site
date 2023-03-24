export type Theme = "light" | "dark"

export function toggleTheme() {
  const { classList } = document.documentElement
  if (classList.contains("dark")) {
    classList.remove("dark")
    storeThemeSetting("light")
  } else {
    classList.add("dark")
    storeThemeSetting("dark")
  }
}

function storeThemeSetting(theme: Theme): void {
  localStorage.setItem("theme", theme)
}
