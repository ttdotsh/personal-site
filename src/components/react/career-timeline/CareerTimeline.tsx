import * as React from "react"
import { useRef } from "react"
import { Disclosure, Transition } from "@headlessui/react"

import { cn } from "@utils/cn"
import type { Stylable } from "@types"

interface CareerTimelineEventProps extends React.PropsWithChildren {
  icon: "building" | "code" | "rocket"
  heading: string
  date: string
  current?: boolean
  last?: boolean
}

/**
 * @requires client:load
 */
export function CareerTimelineEvent(props: CareerTimelineEventProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Disclosure as="div">
      <div className="relative">
        {props.last || (
          <span
            className={cn(
              "absolute left-4 top-6 -ml-px h-full w-0.5",
              "bg-zinc-200 dark:bg-zinc-300/30",
              "last:hidden",
            )}
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-center space-x-2">
          <CareerTimelineEventIcon icon={props.icon} />
          <Disclosure.Button
            className={cn(
              "group flex flex-1 justify-between space-x-4 rounded-lg px-3 py-2",
              "hover:cursor-pointer hover:bg-zinc-100 hover:transition-colors active:bg-zinc-200/60",
              "dark:hover:bg-zinc-800 dark:active:bg-zinc-700/50",
            )}
          >
            <p
              className={cn(
                "text-left text-sm font-semibold",
                "group-hover:text-teal-500 group-hover:transition-colors",
                "dark:group-hover:text-teal-400",
              )}
            >
              {props.heading}
            </p>
            <div className="whitespace-nowrap text-right text-sm text-zinc-500 dark:text-zinc-400">
              <span>
                <time dateTime={props.date}>
                  {props.date}
                  {props.current && " - Present"}
                </time>
              </span>
            </div>
          </Disclosure.Button>
        </div>
        <Transition
          ref={ref}
          className="overflow-hidden transition-[max-height]"
          beforeEnter={() => {
            ref.current &&
              ref.current.style.setProperty(
                `max-height`,
                `${ref.current.scrollHeight}px`,
              )
          }}
          beforeLeave={() => {
            ref.current && ref.current.style.setProperty(`max-height`, `0px`)
          }}
          enter="duration-400 ease-in"
          enterFrom="max-h-0"
          leave="duration-300 ease-out"
          leaveFrom="max-h-fit"
        >
          <Disclosure.Panel
            as="div"
            className="ml-11 px-3 pt-6 text-zinc-600 dark:text-zinc-200"
          >
            {props.children}
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  )
}

function CareerTimelineEventIcon(props: {
  icon: CareerTimelineEventProps["icon"]
}) {
  const bg = getBg(props.icon)
  const Icon = getIcon(props.icon)

  return (
    <div className="flex-grow-0">
      <span
        className={cn(
          bg,
          "flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white",
          "dark:ring-zinc-900",
        )}
      >
        <Icon className="h-5 w-5 text-white" />
      </span>
    </div>
  )
}

function getBg(icon: CareerTimelineEventProps["icon"]): string {
  switch (icon) {
    case "rocket":
      return "bg-orange-500"
    case "code":
      return "bg-green-500"
    case "building":
      return "bg-blue-500"
  }
}

function getIcon(
  icon: CareerTimelineEventProps["icon"],
): <T extends Stylable>(_: T) => JSX.Element {
  switch (icon) {
    case "rocket":
      return RocketIcon
    case "code":
      return CodeIcon
    case "building":
      return WorkIcon
  }
}

function WorkIcon({ className }: Stylable) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CodeIcon({ className }: Stylable) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function RocketIcon({ className }: Stylable) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      />
      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
    </svg>
  )
}
