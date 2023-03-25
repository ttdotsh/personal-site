import { DesktopNav } from "./DesktopNav"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { text: "About", href: "/about" },
  { text: "Just", href: "/just" },
  { text: "Some", href: "/some" },
  { text: "Other", href: "/other" },
  { text: "Stuff", href: "/stuff" },
]

/**
 * @requires client:load
 */
export function Header() {
  return (
    <header className="mt-4 flex">
      <div className="flex-1"></div>
      <DesktopNav navItems={navItems} className="pointer-events-auto" />
      <div className="flex flex-1 items-center justify-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
