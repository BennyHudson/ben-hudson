import type { ReactNode} from 'react'
import React, { PureComponent, Fragment } from 'react'
import { withTheme } from 'styled-components'

import type { MatchMediaProps, MatchMediaQueries, MatchMediaState } from './MatchMedia.types'

export class MatchMedia extends PureComponent<MatchMediaProps, MatchMediaState> {
  matchMediaQuery: MediaQueryList

  public state: MatchMediaState = {
    show: false,
  }

  public componentDidMount(): void {
    this.matchMediaQuery = window.matchMedia(this.generateQueries())
    this.matchMediaQuery.addListener(this.handleOnMatch)
    this.handleOnMatch(this.matchMediaQuery)
  }

  public componentWillUnmount(): void {
    this.matchMediaQuery.removeListener(this.handleOnMatch as EventListener)
  }

  private generateQueries(): string {
    if (this.props.breakpoint === 'sm' || this.props.breakpoint === 'xl') return this.queries[this.props.breakpoint]
    if (this.props.andAbove) return this.queries[`${this.props.breakpoint}AndAbove`]
    if (this.props.andBelow) return this.queries[`${this.props.breakpoint}AndBelow`]
    return this.queries[this.props.breakpoint]
  }

  private queries: MatchMediaQueries = {
    sm: `(max-width: ${this.props.theme!.breakpoints.md - 1}px)`,
    md: `(min-width: ${this.props.theme!.breakpoints.md}px) and (max-width: ${this.props.theme!.breakpoints.lg}px)`,
    lg: `(min-width: ${this.props.theme!.breakpoints.lg}px) and (max-width: ${this.props.theme!.breakpoints.xl}px)`,
    xl: `(min-width: ${this.props.theme!.breakpoints.xl}px)`,
    mdAndBelow: `(max-width: ${this.props.theme!.breakpoints.lg}px)`,
    mdAndAbove: `(min-width: ${this.props.theme!.breakpoints.md}px)`,
    lgAndBelow: `(max-width: ${this.props.theme!.breakpoints.xl}px)`,
    lgAndAbove: `(min-width: ${this.props.theme!.breakpoints.lg}px)`,
  }

  public handleOnMatch = (event: MediaQueryListEvent | MediaQueryList): void => {
    this.setState({
      show: !!event.matches,
    })
  }

  public render(): ReactNode {
    if (!this.state.show) return null
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default withTheme(MatchMedia)
