import { toggleTheme } from "../utils/theme"

/**
 * @requires client:load
 */
export default function ThemeToggle() {
  return <button onClick={toggleTheme}>Toggle</button>
}
