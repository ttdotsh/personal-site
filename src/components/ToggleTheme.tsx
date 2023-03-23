export default function ToggleTheme() {
  function toggleTheme() {
    const { classList } = document.documentElement
    if (classList.contains("dark")) {
      classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  return <button onClick={toggleTheme}>Toggle</button>
}
