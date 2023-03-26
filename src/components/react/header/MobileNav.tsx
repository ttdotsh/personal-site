import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"

import type { NavItem } from "@types"

interface MobileNavProps {
  navItems: NavItem[]
  className?: string
}

/**
 * @requires client:load
 */
export function MobileNav({ navItems, className }: MobileNavProps) {
  return (
    <Popover className="relative">
      <Popover.Button
        className={`z-50 flex items-center rounded-full bg-white/90 p-2 text-sm shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:text-teal-500 dark:bg-zinc-800/70 dark:text-teal-400 dark:ring-zinc-50/10 dark:hover:bg-zinc-800/90 dark:hover:ring-zinc-50/20 ${className}`}
      >
        <ChevronIcon className="transition-transform ui-open:-rotate-90" />
        <span className="mx-1">Menu</span>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/60" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="nav"
            focus
            className="fixed inset-x-6 top-14 z-50 rounded-xl bg-white/95 p-4 ring-1 ring-white dark:bg-zinc-800/95 dark:ring-zinc-800"
          >
            <div className="flex items-center justify-between px-2">
              <h2 className="text-sm text-zinc-500 dark:text-zinc-400">
                Navigation
              </h2>
              <Popover.Button className="">
                <CloseIcon />
              </Popover.Button>
            </div>
            <ul className="mt-2 divide-y divide-zinc-100 dark:divide-zinc-100/5">
              {navItems.map(({ text, href }, i) => (
                <MobileNavItem key={i} href={href}>
                  {text}
                </MobileNavItem>
              ))}
            </ul>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

interface NavItemProps {
  href: string
  children: React.ReactNode
}

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Popover.Button
        as="a"
        href={href}
        className="block rounded-lg p-2 transition hover:text-teal-500 dark:hover:text-teal-400"
      >
        {children}
      </Popover.Button>
    </li>
  )
}

interface IconProps {
  className?: string
}

function ChevronIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`inline-block h-4 w-4 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  )
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-6 w-6 transition hover:text-red-400 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}
