import type { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

import type { Milestone } from '../../../CardList.types'

export interface StyledCardProps {
  theme: Theme
  type: Milestone['type']
}
