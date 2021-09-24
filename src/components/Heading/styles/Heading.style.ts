import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHeadingProps } from './Heading.style.types'

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

  ${props.theme.mixins.respondTo.md(css`
    font-size: ${props.theme.typography.heading[props.size].fontSize};
    line-height: ${props.theme.typography.heading[props.size].lineHeight};
  `)}

  ${!props.noMargin && css`
    margin-bottom: ${props.theme.spacing.fixed[2]}px;

    ${props.size > 4 && css`
      margin-bottom: ${props.theme.spacing.fixed[8]}px;
    `}
  `}

  ${props.inverse && css`
    color: ${props.theme.colours.secondary};
  `}

  &:last-child {
    margin-bottom: 0;
  }
`)
