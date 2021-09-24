import React, { FC, ReactElement } from 'react'

import * as Styled from './styles/Markdown.style'

import { MarkdownProps } from './Markdown.types'

const Markdown: FC<MarkdownProps> = ({ children }: MarkdownProps): ReactElement => {
  return (
    <Styled.Markdown>
      {children}
    </Styled.Markdown>
  )
}

export default Markdown
