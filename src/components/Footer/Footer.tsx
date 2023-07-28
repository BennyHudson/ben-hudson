import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Footer.style'

import { FooterProps } from './Footer.types'

const Footer: FC<FooterProps> = ({
  // add props
}: FooterProps): ReactElement => {
  return (
    <Styled.Footer>
      Component Footer
    </Styled.Footer>
  )
}

export default Footer
