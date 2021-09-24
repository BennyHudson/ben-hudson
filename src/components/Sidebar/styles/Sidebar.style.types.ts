import { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

export interface StyledSidebarProps {
  theme: Theme
  level?: 1 | 2 | 3
  active: boolean
}
