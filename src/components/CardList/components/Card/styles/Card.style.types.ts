import { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

import { Milestone } from '../../../CardList.types'

export interface StyledCardProps {
  theme: Theme
  type: Milestone['type']
}
