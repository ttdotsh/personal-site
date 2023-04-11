// Library imports
import { useState, useEffect, useRef } from "react"
import { cx } from "classix"

// Project imports
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "#" },
  { text: "Hobbies", href: "#" },
]

/**
 * @requires client:load
 */
export function Header() {
  return (
    <header className="sticky top-4 z-10">
      <div className="flex">
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
