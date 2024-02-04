import { useRef, useEffect } from "react"

import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@utils/cn"
import { clamp, setProperty } from "@utils/style"

/**
 * @requires client:load
 */
export function Header() {
  const headerRef = useRef<HTMLDivElement>(null)

  function updateStyles() {
    const downDelay = 0
    const upDelay = 64

    const { top, height } =
      headerRef.current?.getBoundingClientRect() as DOMRect
    const scrollY = clamp(
      window.scrollY,
      0,
      document.body.scrollHeight - window.innerHeight,
    )

    if (scrollY < downDelay) {
      setProperty("--header-height", `${downDelay + height}px`)
      setProperty("--header-mb", `${-downDelay}px`)
    } else if (top + height < -upDelay) {
      const offset = Math.max(height, scrollY - upDelay)
      setProperty("--header-height", `${offset}px`)
      setProperty("--header-mb", `${height - offset}px`)
    } else if (top === 0) {
      setProperty("--header-height", `${scrollY + height}px`)
      setProperty("--header-mb", `${-scrollY}px`)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", updateStyles, { passive: true })
    return () => {
      window.removeEventListener("scroll", updateStyles)
    }
  }, [])

  return (
    <header className={cn("mb-[--header-mb] h-[--header-height]")}>
      <div ref={headerRef} className="sticky top-0 z-10 h-12 pt-4">
        <div className="flex">
          <div className="flex-1"></div>
          {/* <DesktopNav
            navItems={navItems}
            className="pointer-events-auto hidden md:block"
          /> */}
          <div className="flex flex-1 items-center justify-end">
            {/* <MobileNav
              navItems={navItems}
              className="pointer-events-auto mr-4 md:hidden"
            /> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
