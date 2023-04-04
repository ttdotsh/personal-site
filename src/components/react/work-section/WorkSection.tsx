// Project imports
import { CodeIcon, WorkIcon, RocketIcon } from "./icons"
import { Timeline } from "./Timeline"

const timeline = [
  {
    content: "Started working at",
    target: "VIA Science",
    description:
      "Currently, I'm working as a full-stack developer at Via Science, where I build and maintain frontend apps in Angular and React, backend API’s and microservices with Python and Celery, and deployment pipelines with tools like Docker, Kubernetes, and AWS.",
    date: "Sep 2022",
    datetime: "2022-09-19",
    Icon: WorkIcon,
    iconBackground: "bg-blue-500",
  },
  {
    content: "Worked as a",
    target: "Freelance Software Engineer",
    description:
      "I worked briefly as a freelance developer and took on projects using React helping a budding startup put together a component library for internal use, and React Native and Expo building out an MVP mobile app for a trucking company to help automate dispatching and check-in workflows.",
    date: "Jun 2022",
    datetime: "2022-06-23",
    Icon: CodeIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "Career Transition",
    description: "Hello",
    date: "Dec 2021",
    datetime: "2021-12-20",
    Icon: RocketIcon,
    iconBackground: "bg-orange-500",
  },
]

/**
 * @requires client:load
 */
export function WorkSection() {
  return (
    <>
      <div className="flow-root">
        <Timeline>
          {timeline.map((e, i) => (
            <Timeline.Event
              key={i}
              event={e}
              isFirst={i === 0}
              isLast={i === timeline.length - 1}
            />
          ))}
        </Timeline>
      </div>
    </>
  )
}
