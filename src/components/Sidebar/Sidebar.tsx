import React, { FC, ReactElement } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Heading from '@components/Heading'

import * as Styled from './styles/Sidebar.style'

const Sidebar: FC = (): ReactElement => {
  return (
    <Styled.Sidebar>
      <Styled.Header>
        <Styled.Avatar to='/'>
          <StaticImage src='../../assets/memoji.png' alt="Ben Hudson | Senior Development Plan" />
        </Styled.Avatar>
        <Heading text='Ben Hudson' size={2} weight={3} noMargin />
        <Heading text='Senior Development Plan' size={1} />
      </Styled.Header>
      
    </Styled.Sidebar>
  )
}

export default Sidebar
