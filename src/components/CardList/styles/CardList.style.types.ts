import type { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

import type { Milestone } from '../CardList.types'

export interface StyledCardListProps {
  theme: Theme
  type: 'all' | Milestone['type']
  isActive: boolean
}
