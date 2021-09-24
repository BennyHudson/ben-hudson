import { css, FlattenSimpleInterpolation } from 'styled-components'

import { Theme } from '../themes/themes.types'

export default (fn: Function): Function => {
  return (...args: unknown[]): FlattenSimpleInterpolation =>
    css`
      ${({ theme }: { theme: Theme }): FlattenSimpleInterpolation => {
        return fn(theme, ...args)
      }}
    ` as FlattenSimpleInterpolation
}
