export interface NavItem {
  text: string
  href: string
}

export interface TimelineEvent {
  id: number
  content: string
  target: string
  href: string
  date: string
  datetime: string
  Icon: (props: ReactIconProps) => JSX.Element
  iconBackground: string
}

/**
 * React Component Prop Types
 */

export interface Composable {
  children?: React.ReactNode
}

export interface ReactIconProps {
  className?: string
}
