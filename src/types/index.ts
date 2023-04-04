export interface NavItem {
  text: string
  href: string
}

export interface TimelineEvent {
  content: string
  target?: string
  description?: string
  date: string
  datetime: string
  Icon: (props: Stylable) => JSX.Element
  iconBackground: string
}

/**
 * React Component Prop Types
 */
export interface Composable {
  children?: React.ReactNode
}

export interface Stylable {
  className?: string
}
