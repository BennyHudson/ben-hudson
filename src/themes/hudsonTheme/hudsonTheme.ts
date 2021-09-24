import spacing from './constants/spacing'
import breakpoints from './constants/breakpoints'
import colours from './constants/colours'
import typography from './constants/typography'
import respondTo from './mixins/respondTo'

import { Theme } from './hudsonTheme.types'

const hudsonTheme: Theme = {
  spacing: spacing,
  breakpoints: breakpoints,
  colours: colours,
  typography: typography,
  mixins: {
    respondTo,
  },
}

export { hudsonTheme }
