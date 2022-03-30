import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledParagraphProps } from './Paragraph.style.types'

export const Paragraph = styled.p((props: StyledParagraphProps): FlattenSimpleInterpolation => css`
  font-size: ${props.theme.typography.paragraph[props.size].fontSize};
  line-height: ${props.theme.typography.paragraph[props.size].lineHeight};
  font-weight: ${props.theme.typography.fontWeight[props.weight]};

  ${!props.noMargin && css`
    margin-bottom: ${props.theme.spacing.fixed[2]}px;
  `}

  ${props.inverse && css`
    color: ${props.theme.colours.tertiary};
  `}

  &:last-child {
    margin-bottom: 0;
  }
`)
