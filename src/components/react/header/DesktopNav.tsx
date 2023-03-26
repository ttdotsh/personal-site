import type { NavItem } from "@types"

interface DesktopNavProps {
  navItems: NavItem[]
  className?: string
}

/**
 * @requires client:load
 */
export function DesktopNav({ navItems, className }: DesktopNavProps) {
  return (
    <nav className={className}>
      <ul className="flex rounded-full bg-white/70 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/70 dark:ring-zinc-50/10">
        {navItems.map(({ text, href }, i) => (
          <NavItem key={i} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

interface NavItemProps {
  href: string
  children: React.ReactNode
}

function NavItem({ href, children }: NavItemProps) {
  /**
   * @todo add highlighting active nav item
   * const isActive = href === window.location.pathname
   */

  return (
    <li>
      <a
        className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
        href={href}
      >
        {children}
      </a>
    </li>
  )
}