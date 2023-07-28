import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCardProps } from './Card.style.types'
import respondTo from '@mixins/respondTo'

export const Card = styled.div((props: StyledCardProps): FlattenSimpleInterpolation => css`
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
  padding: ${props.theme.spacing[2]}px;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${props.theme.spacing[2]}px;
  text-align: center;

  ${respondTo.md(css`
    padding: ${props.theme.spacing[4]}px;
    gap: ${props.theme.spacing[4]}px;
    flex-direction: row;
    text-align: left;
  `)}

  ${props.type === 'life-event' && css`
    border-top: 5px solid ${props.theme.colours.yellow};
  `}

  ${props.type === 'education' && css`
    border-top: 5px solid ${props.theme.colours.green};
  `}

  ${props.type === 'career' && css`
    border-top: 5px solid ${props.theme.colours.blue};
  `}
`)

export const IconWrapper = styled.div((props: StyledCardProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props.theme.spacing[4]}px;
  aspect-ratio: 1 / 1;
  color: #fff;
  width: 80px;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${props.type === 'life-event' && css`
    background: ${props.theme.colours.yellow};

    &::after {
      border: 2px solid ${props.theme.colours.yellow};
    }
  `}

  ${props.type === 'education' && css`
    background: ${props.theme.colours.green};

    &::after {
      border: 2px solid ${props.theme.colours.green};
    }
  `}

  ${props.type === 'career' && css`
    background: ${props.theme.colours.blue};

    &::after {
      border: 2px solid ${props.theme.colours.blue};
    }
  `}

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
  }
`)

export const Content = styled.div((): FlattenSimpleInterpolation => css``)
