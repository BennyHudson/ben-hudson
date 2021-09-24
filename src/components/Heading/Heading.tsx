import React, { FC, ReactElement } from 'react'

import { HeadingProps } from './Heading.types'

import * as Styled from './styles/Heading.style'

const Heading: FC<HeadingProps> = ({
  text,
  appearance = 'primary',
  level = 2,
  size = 2,
  noMargin = false,
  inverse = false,
  weight = 1,
}: HeadingProps): ReactElement => {
  return (
    <Styled.Heading
      as={`h${level}` as React.ElementType}
      size={size}
      noMargin={noMargin}
      inverse={inverse}
      weight={weight}
      level={level}
      appearance={appearance}
    >
      {text}
    </Styled.Heading>
  )
}

export default Heading
