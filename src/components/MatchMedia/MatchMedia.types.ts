import type { ReactNode } from 'react'

import type { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

export interface MatchMediaProps {
  /**
   * Breakpoint to show content
   * */
  breakpoint: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Cascade the content to the breakpoint(s) above
   * */
  andAbove?: boolean
  /**
   * Cascade the content to the breakpoint(s) below
   * */
  andBelow?: boolean
  /**
   * React children
   * */
  children: ReactNode
  /**
   * Component Theme
   * */
  theme?: Theme
}

export interface MatchMediaState {
  show: boolean
}

export interface MatchMediaQueries {
  [key: string]: string
}
