// Library imports
import { cx } from "classix"

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

interface TimelineEventProps extends Composable {
  event: TimelineEvent
}

Timeline.Event = function ({ event, children }: TimelineEventProps) {
  return (
    <li key={event.id}>
      <div className="relative pb-8">
        {children}
        <div className="relative flex space-x-3">
          <div>
            <span
              className={cx(
                event.iconBackground,
                "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
              )}
            >
              <event.Icon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </div>
          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p className="text-sm text-gray-500">
                {event.content}{" "}
                <a href={event.href} className="font-medium text-gray-900">
                  {event.target}
                </a>
              </p>
            </div>
            <div className="whitespace-nowrap text-right text-sm text-gray-500">
              <time dateTime={event.datetime}>{event.date}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

Timeline.Connector = function () {
  return (
    <span
      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
      aria-hidden="true"
    />
  )
}
