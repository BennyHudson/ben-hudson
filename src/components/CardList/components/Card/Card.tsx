import React, { FC, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons'

import Heading from '@components/Heading'

import * as Styled from './styles/Card.style'

import { Milestone } from '../../CardList.types'

const Card: FC<Milestone> = ({
  type,
  title,
  location,
  time,
}: Milestone): ReactElement => {
  const getIcon = (milestoneType: Milestone['type']) => {
    if (milestoneType === 'career') {
      return faBriefcase
    }
    if (milestoneType === 'education') {
      return faGraduationCap
    }
    if (milestoneType === 'life-event') {
      return faStar
    }
  }

  return (
    <Styled.Card type={type}>
      <Styled.IconWrapper type={type}>
        <FontAwesomeIcon icon={getIcon(type)} />
      </Styled.IconWrapper>
      <Styled.Content>
        <Heading text={time} size={1} noMargin />
        <Heading text={title} size={2} weight={2} noMargin />
        <Heading text={location} size={1} noMargin />
      </Styled.Content>
    </Styled.Card>
  )
}

export default Card
