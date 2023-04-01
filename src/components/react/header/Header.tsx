import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Just", href: "#" },
  { text: "Some", href: "#" },
  { text: "Other", href: "#" },
  { text: "Stuff", href: "#" },
]

/**
 * @requires client:load
 */
export function Header() {
  return (
    <header>
      <div className="mb-6 flex pt-4">
        <div className="flex-1"></div>
        <DesktopNav
          navItems={navItems}
          className="pointer-events-auto hidden md:block"
        />
        <div className="flex flex-1 items-center justify-end">
          <MobileNav
            navItems={navItems}
            className="pointer-events-auto mr-4 md:hidden"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
