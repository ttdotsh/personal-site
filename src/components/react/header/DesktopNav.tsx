interface Link {
  text: string
  href: string
}

interface Props {
  navItems: Link[]
  className?: string
}

/**
 * @requires client:load
 */
export function DesktopNav(props: Props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/70 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/70 dark:ring-zinc-50/10">
        {props.navItems.map(({ text, href }) => (
          <li>
            <a
              className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
              href={href}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface NavItemProps {
  link: Link
}

function NavItem({ link }: NavItemProps) {
  const isActive = link.href === window.location.pathname

  return (
    <li>
      <a
        className="px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
        href={link.href}
      >
        {link.text}
      </a>
    </li>
  )
}
