import { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

import { ParagraphProps } from '../Paragraph.types'

export interface StyledParagraphProps {
  theme: Theme
  size: ParagraphProps['size']
  weight: ParagraphProps['weight']
  inverse: boolean
}
