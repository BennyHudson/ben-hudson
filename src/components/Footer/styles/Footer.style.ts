import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledFooterProps } from './Footer.style.types'

export const Footer = styled.div((props: StyledFooterProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[8]}px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`)
