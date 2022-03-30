import { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

import { Milestone } from '../CardList.types'

export interface StyledCardListProps {
  theme: Theme
  type: 'all' | Milestone['type']
  isActive: boolean
}
