// Library imports
import { cx } from "classix"
import { useRef } from "react"
import { Disclosure, Transition } from "@headlessui/react"

// Project imports
import { timeline } from "./content"
import type { Stylable } from "@types"

interface TimelineEvent {
  title: string
  content: string[]
  date: string
  datetime?: string
  Icon: (props: Stylable) => JSX.Element
  iconBackground: string
}

/**
 * @requires client:load
 */
export function Timeline() {
  return (
    <div className="z-0 flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((e, i) => (
          <Timeline.Event
            key={i}
            event={e}
            isFirst={i === 0}
            isLast={i === timeline.length - 1}
          ></Timeline.Event>
        ))}
      </ul>
    </div>
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
  return (
    <Disclosure as="li">
      <div className="relative">
        {isLast || <Timeline.Connector />}
        <div
          className={cx(
            "relative flex items-center space-x-2",
            isLast ? "mb-6" : "pb-6",
          )}
        >
          <Timeline.Icon
            Icon={event.Icon}
            iconBackground={event.iconBackground}
          />
          <Timeline.Button
            title={event.title}
            date={event.date}
            datetime={event.date}
            isFirst={isFirst}
          />
        </div>
        <Timeline.Detail content={event.content} />
      </div>
    </Disclosure>
  )
}

Timeline.Connector = function () {
  return (
    <span
      className={cx(
        "absolute left-4 top-4 -ml-px h-full w-0.5",
        "bg-zinc-200 dark:bg-zinc-300/30",
      )}
      aria-hidden="true"
    />
  )
}

interface TimelineIconProps {
  Icon: TimelineEvent["Icon"]
  iconBackground: string
}

Timeline.Icon = function (props: TimelineIconProps) {
  return (
    <div>
      <span
        className={cx(
          props.iconBackground,
          "flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white",
          "dark:ring-zinc-900",
        )}
      >
        <props.Icon className="h-5 w-5 text-white" aria-hidden="true" />
      </span>
    </div>
  )
}

interface TimelineButtonProps {
  title: string
  date: string
  datetime: string
  isFirst: boolean
}

Timeline.Button = function (props: TimelineButtonProps) {
  return (
    <Disclosure.Button
      className={cx(
        "group flex flex-1 justify-between space-x-4 rounded-lg px-3 py-2",
        "hover:cursor-pointer hover:bg-zinc-100 hover:transition-colors active:bg-zinc-200/60",
        "dark:hover:bg-zinc-800 dark:active:bg-zinc-700/50",
      )}
    >
      <p
        className={cx(
          "text-left text-sm font-semibold",
          "group-hover:text-teal-500 group-hover:transition-colors",
          "dark:group-hover:text-teal-400",
        )}
      >
        {props.title}
      </p>
      <div className="whitespace-nowrap text-right text-sm text-zinc-500 dark:text-zinc-400">
        <span>
          <time dateTime={props.datetime}>
            {props.date}
            {props.isFirst && " - Present"}
          </time>
        </span>
      </div>
    </Disclosure.Button>
  )
}

interface TimelineDetailProps {
  content: string[]
}

Timeline.Detail = function (props: TimelineDetailProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
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
        as="p"
        className="ml-11 space-y-3 px-3 pb-6 dark:text-zinc-200"
      >
        {props.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </Disclosure.Panel>
    </Transition>
  )
}
