import React, { ReactElement, FC, useState } from 'react'
import { kebabCase } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons'

import Paragraph from '@components/Paragraph'

import Card from './components/Card'

import * as Styled from './styles/CardList.style'

import { CardListProps, Milestone } from './CardList.types'

const CardList: FC<CardListProps> = ({
  milestones,
}: CardListProps): ReactElement => {
  const milestoneType = ['All', 'Life Event', 'Education', 'Career']

  const [activeFilter, setActiveFilter] = useState('all')

  const filteredMilestones = milestones.filter((milestone) => {
    if (activeFilter === 'all') {
      return milestone
    }
    return milestone.type === activeFilter
  })

  const getIcon = (milestoneType) => {
    if (milestoneType === 'career') {
      return faBriefcase
    }
    if (milestoneType === 'education') {
      return faGraduationCap
    }
    if (milestoneType === 'life-event') {
      return faStar
    }
    return faGlobe
  }

  return (
    <Styled.CardList>
      <Styled.Filters>
        <Paragraph weight={3} text='Filter By:' noMargin />
        {
          milestoneType.map((type) => {
            return (
              <Styled.FilterButton
                type={kebabCase(type)}
                onClick={() => setActiveFilter(kebabCase(type))}
                isActive={activeFilter === kebabCase(type)}
              >
                <FontAwesomeIcon icon={getIcon(kebabCase(type))} />
                {type}
              </Styled.FilterButton>
            )
          })
        }
      </Styled.Filters>
      {
        filteredMilestones.map((milestone) => {
          return (
            <Card {...milestone} />
          )
        })
      }
    </Styled.CardList>
  )
}

export default CardList
