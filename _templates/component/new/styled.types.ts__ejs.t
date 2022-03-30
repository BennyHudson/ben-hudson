---
to: src/components/<%= name %>/styles/<%= name %>.style.types.ts
---
import { Theme } from '@themes/hudsonTheme/hudsonTheme.types'

export interface Styled<%= name %>Props {
  theme: Theme
}
