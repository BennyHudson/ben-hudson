import type { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

import type { HeadingProps } from '../Heading.types'

export interface StyledHeadingProps {
  theme: Theme
  level: HeadingProps['level']
  size: HeadingProps['size']
  noMargin: HeadingProps['noMargin']
  inverse: HeadingProps['inverse']
  weight: HeadingProps['weight']
}
