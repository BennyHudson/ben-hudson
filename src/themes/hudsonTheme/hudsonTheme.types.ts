import { Spacing } from './constants/spacing.types';
import { Breakpoints } from './constants/breakpoints.types';
import { Colours } from './constants/colours.types';
import { Typography } from './constants/typography.types';
import { MixinRespondTo } from './mixins/respondTo.types';

export interface Theme {
  spacing: Spacing;
  breakpoints: Breakpoints;
  colours: Colours;
  typography: Typography;
  mixins: {
    respondTo: MixinRespondTo;
  };
}
