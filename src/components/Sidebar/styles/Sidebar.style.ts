import styled, { FlattenSimpleInterpolation, css } from 'styled-components'
import { Link } from 'gatsby'

import { StyledSidebarProps } from './Sidebar.style.types'

type SidebarTheme = Pick<StyledSidebarProps, 'theme'>

export const Sidebar = styled.div((): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  box-shadow: none;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
`)

export const Header = styled.div((props: SidebarTheme): FlattenSimpleInterpolation => css`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props.theme.spacing.fixed[4]}px;
  border-bottom: 1px solid #ccc;
`)

export const Avatar = styled(Link)((props: SidebarTheme): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.pink};
  border-radius: 50%;
  margin-bottom: ${props.theme.spacing.fixed[2]}px;
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
    border: 2px solid ${props.theme.colours.pink};
  }

  img {
    max-width: 120px;
    max-height: 120px;
  }
`)

export const NavBlock = styled.div((props: SidebarTheme): FlattenSimpleInterpolation => css`
  margin: 0 ${props.theme.spacing.fixed[2]}px;
  padding: ${props.theme.spacing.fixed[2]}px;
  border-bottom: 1px solid ${props.theme.colours.pink};

  li {
    margin-bottom: ${props.theme.spacing.fixed[1]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: ${props.theme.spacing.fixed[4]}px;
    border-bottom: none;
  }
`)

export const NavLink = styled(Link)((props: StyledSidebarProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.primary};
  display: block;
  position: relative;
  text-decoration: underline;

  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;

    ${props.level === 1 && css`
      background: ${props.theme.colours.red};
    `}

    ${props.level === 2 && css`
      background: ${props.theme.colours.orange};
    `}

    ${props.level === 3 && css`
      background: ${props.theme.colours.green};
    `}
   }

   ${props.active && css`
     font-weight: 600;
     text-decoration: underline;
   `}
`)

export const Filters = styled.div((props: StyledSidebarProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props.theme.spacing.fixed[2]}px ${props.theme.spacing.fixed[4]}px;
  background: #ededed;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`)

export const FilterButton = styled.button((props: StyledSidebarProps): FlattenSimpleInterpolation => css`
  background: none;
  position: relative;
  border: 2px solid ${props.theme.colours.pink};
  border-radius: 40px;
  padding: ${props.theme.spacing.fixed[1] / 2}px ${props.theme.spacing.fixed[1]}px;
  margin-right: ${props.theme.spacing.fixed[1]}px;
  cursor: pointer;
  font-weight: 600;

  ${props.active && css`
    color: ${props.theme.colours.secondary};
    background: ${props.theme.colours.pink};
  `}

  &:last-child {
    margin-right: 0;
  }

  ${props.level && css`
    padding-right: calc(${props.theme.spacing.fixed[1] * 2}px + 12px);

    ${props.level === 1 && css`
      border-color: ${props.theme.colours.red};

      ${props.active && css`
        background: ${props.theme.colours.red};
      `}
    `}

    ${props.level === 2 && css`
      border-color: ${props.theme.colours.orange};

      ${props.active && css`
        background: ${props.theme.colours.orange};
      `}
    `}

    ${props.level === 3 && css`
      border-color: ${props.theme.colours.green};

      ${props.active && css`
        background: ${props.theme.colours.green};
      `}
    `}

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      right: ${props.theme.spacing.fixed[1]}px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      border: 2px solid transparent;

      ${props.active && css`
        border: 2px solid ${props.theme.colours.secondary};
      `}

      ${props.level === 1 && css`
        background: ${props.theme.colours.red};
      `}

      ${props.level === 2 && css`
        background: ${props.theme.colours.orange};
      `}

      ${props.level === 3 && css`
        background: ${props.theme.colours.green};
      `}
    }
  `}


`)
