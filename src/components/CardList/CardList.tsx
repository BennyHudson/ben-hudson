import type { ReactElement, FC} from 'react'
import React, { useState } from 'react'
import { kebabCase } from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons'

import Paragraph from '@components/Paragraph'

import Card from './components/Card'

import * as Styled from './styles/CardList.style'

import type { CardListProps} from './CardList.types'
import ScrollAnimation from 'react-animate-on-scroll'
import { useBreakpoints } from '@hooks/useBreakpoints'

const CardList: FC<CardListProps> = ({
  milestones,
}: CardListProps): ReactElement => {
  const milestoneType = ['All', 'Life Event', 'Education', 'Career']

  const [activeFilter, setActiveFilter] = useState('all')

  const { mdAndAbove } = useBreakpoints()

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
        {mdAndAbove && <Paragraph weight={3} text='Filter By:' noMargin />}
        {
          milestoneType.map((type, index) => {
            return (
              <Styled.FilterButton
                key={index}
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
        filteredMilestones.map((milestone, index) => {
          return (
            <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce key={index} scrollableParentSelector='#scrolly-div'>
              <Card {...milestone} key={index} />
            </ScrollAnimation>
          )
        })
      }
    </Styled.CardList>
  )
}

export default CardList
