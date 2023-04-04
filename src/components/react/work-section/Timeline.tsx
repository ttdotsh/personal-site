// Library imports
import { cx } from "classix"
import { useRef } from "react"
import { Disclosure, Transition } from "@headlessui/react"

// Project imports
import type { TimelineEvent, Composable } from "@types"

/**
 * @requires client:load
 */
export function Timeline({ children }: Composable) {
  return (
    <ul role="list" className="-mb-8">
      {children}
    </ul>
  )
}

interface TimelineEventProps {
  event: TimelineEvent
  isFirst: boolean
  isLast: boolean
}

Timeline.Event = function ({
  event,
  isFirst = false,
  isLast = false,
}: TimelineEventProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Disclosure as="li">
      <div className="relative">
        {isLast || <Timeline.Connector />}
        <div className="relative flex items-center space-x-2 pb-6">
          <div>
            <span
              className={cx(
                event.iconBackground,
                "flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white",
                "dark:ring-zinc-900"
              )}
            >
              <event.Icon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </div>
          <Disclosure.Button
            className={cx(
              "flex flex-1 justify-between space-x-4 rounded-lg px-3 py-2",
              "hover:cursor-pointer hover:bg-zinc-100 hover:transition-colors dark:hover:bg-zinc-800"
            )}
          >
            <div className="text-left">
              <p className="text-sm">
                {event.content}
                {event.target && (
                  <span className="font-semibold"> {event.target}</span>
                )}
              </p>
            </div>
            <div className="whitespace-nowrap text-right text-sm text-zinc-500 dark:text-zinc-400">
              <span>
                <time dateTime={event.datetime}>
                  {event.date}
                  {isFirst && " - Present"}
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
                `${ref.current.scrollHeight}px`
              )
          }}
          beforeLeave={() => {
            ref.current && ref.current.style.setProperty(`max-height`, `0px`)
          }}
          enter="duration-400 ease-in"
          enterFrom="max-h-0"
          leave="duration-300 ease-out"
        >
          <Disclosure.Panel
            className="ml-11 px-3 pb-6 dark:text-zinc-200"
            as="p"
          >
            {event.description}
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  )
}

Timeline.Connector = function () {
  return (
    <span
      className={cx(
        "absolute left-4 top-4 -ml-px h-full w-0.5",
        "bg-zinc-200 dark:bg-zinc-300/30"
      )}
      aria-hidden="true"
    />
  )
}
