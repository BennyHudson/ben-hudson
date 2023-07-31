import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCardListProps } from './CardList.style.types'
import respondTo from '@mixins/respondTo'

export const CardList = styled.div((props: StyledCardListProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  gap: ${props.theme.spacing[2]}px;
  padding-bottom: ${props.theme.spacing[6]}px;

  ${respondTo.md(css`
    gap: ${props.theme.spacing[4]}px;
    padding-bottom: ${props.theme.spacing[10]}px;
  `)}
`)

export const Filters = styled.div((props: StyledCardListProps): FlattenSimpleInterpolation => css`
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
  padding: ${props.theme.spacing[2]}px ${props.theme.spacing[4]}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${props.theme.spacing[2]}px;
`)

export const FilterButton = styled.button((props: StyledCardListProps): FlattenSimpleInterpolation => css`
  border: none;
  padding: ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props.theme.spacing[1]}px;
  border-radius: 40px;
  cursor: pointer;
  font-family: ${props.theme.typography.fontFamily};
  color: #333;
  background: none;
  border: 2px solid ${props.theme.colours.pink};
  font-weight: 600;
  transition: 0.4s all ease;
  flex-grow: 1;

  ${respondTo.md(css`
    flex-grow: 0;
  `)}

  ${props.isActive && css`
    background: ${props.theme.colours.pink};
  `}

  ${props.type === 'life-event' && css`
    border: 2px solid ${props.theme.colours.yellow};

    ${props.isActive && css`
      background: ${props.theme.colours.yellow};
    `}
  `}

  ${props.type === 'education' && css`
    border: 2px solid ${props.theme.colours.green};

    ${props.isActive && css`
      background: ${props.theme.colours.green};
    `}
  `}

  ${props.type === 'career' && css`
    border: 2px solid ${props.theme.colours.blue};

    ${props.isActive && css`
      background: ${props.theme.colours.blue};
    `}
  `}
`)
