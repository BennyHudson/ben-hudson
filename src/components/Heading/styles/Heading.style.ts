import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledHeadingProps } from './Heading.style.types'
import respondTo from '@mixins/respondTo'

export const Heading = styled.h2((props: StyledHeadingProps): FlattenSimpleInterpolation => css`
  font-size: ${props.theme.typography.heading[props.size].fontSizeMobile};
  line-height: ${props.theme.typography.heading[props.size].lineHeightMobile};
  font-weight: 400;

  ${props.weight === 2 && css`
    font-weight: 600;
  `}

  ${props.weight === 3 && css`
    font-weight: 700;
  `}

  ${respondTo.md(css`
    font-size: ${props.theme.typography.heading[props.size].fontSize};
    line-height: ${props.theme.typography.heading[props.size].lineHeight};
  `)}

  ${!props.noMargin && css`
    margin-bottom: ${props.theme.spacing[2]}px;

    ${props.size > 4 && css`
      margin-bottom: ${props.theme.spacing[8]}px;
    `}
  `}

  ${props.inverse && css`
    color: ${props.theme.colours.secondary};
  `}

  &:last-child {
    margin-bottom: 0;
  }
`)
