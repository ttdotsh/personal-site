// Library imports
import { cn } from "@utils/cn"

// Project imports
import type { NavItem, Stylable, Composable } from "@types"

interface DesktopNavProps extends Stylable {
  navItems: NavItem[]
}

/**
 * @requires client:load
 */
export function DesktopNav({ navItems, className }: DesktopNavProps) {
  return (
    <nav className={className}>
      <ul
        className={cn(
          "flex space-x-6 rounded-full bg-white/70 px-6 py-2.5",
          "text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-lg",
          "dark:bg-zinc-800/70 dark:ring-zinc-50/10",
        )}
      >
        {navItems.map(({ text, href }, i) => (
          <DesktopNavItem key={i} href={href}>
            {text}
          </DesktopNavItem>
        ))}
      </ul>
    </nav>
  )
}

interface NavItemProps extends Composable {
  href: string
}

function DesktopNavItem({ href, children }: NavItemProps) {
  /**
   * @todo add highlighting active nav item
   * const isActive = href === window.location.pathname
   */

  return (
    <li>
      <a
        className="block transition hover:text-teal-500 dark:hover:text-teal-400"
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
