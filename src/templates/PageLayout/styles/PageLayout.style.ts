import styled, { FlattenSimpleInterpolation, css } from 'styled-components'

import { StyledPageLayoutProps } from './PageLayout.style.types'

export const PageLayout = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  background: ${props.theme.colours.pink};
`)

export const Content = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  flex: 1 1 100%;
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  flex-basis: 0;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 ${props.theme.spacing.fixed[4]}px;
  display: flex;
`)

export const Homepage = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  min-height: 50vh;
  color: ${props.theme.colours.secondary};
  display: flex;
  align-items: flex-end;
  margin-bottom: ${props.theme.spacing.fixed[10] * 3}px;
`)

export const HomepageContent = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translateY(50%);
`)

export const Page = styled.div((): FlattenSimpleInterpolation => css`
  align-self: flex-start;
  width: 100%;
`)

export const PageContent = styled.div((): FlattenSimpleInterpolation => css`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`)

export const ContentHeader = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing.fixed[10]}px 0;

  [class*=Heading] {
    border-bottom: 1px solid ${props.theme.colours.secondary};
  }
`)

export const ContentBody = styled.article((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing.fixed[8]}px;
  background: ${props.theme.colours.secondary};
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
  border-radius: ${props.theme.spacing.fixed[1]}px;
  margin-bottom: ${props.theme.spacing.fixed[10]}px;
  position: relative;
`)

export const Avatar = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  margin-right: ${props.theme.spacing.fixed[2]}px;
  flex-shrink: 0;

  img {
    max-width: 150px;
    max-height: 150px;
  }
`)

export const Level = styled.div((props: StyledPageLayoutProps): FlattenSimpleInterpolation => css`
  position: absolute;
  padding: ${props.theme.spacing.fixed[1]}px ${props.theme.spacing.fixed[2]}px;
  padding-right: calc(${props.theme.spacing.fixed[2] * 2}px + 12px);
  top: 0;
  right: 0;
  border-radius: 0 0 0 ${props.theme.spacing.fixed[1]}px;
  color: ${props.theme.colours.secondary};
  font-weight: 600;

  ${props.level === 1 && css`
    background: ${props.theme.colours.red};
  `}

  ${props.level === 2 && css`
    background: ${props.theme.colours.orange};
  `}

  ${props.level === 3 && css`
    background: ${props.theme.colours.green};
  `}

  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    right: ${props.theme.spacing.fixed[2]}px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2px solid ${props.theme.colours.secondary};
  }
`)
