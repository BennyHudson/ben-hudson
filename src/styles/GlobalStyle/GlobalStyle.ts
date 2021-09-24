import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components'

import { GlobalStyleProps } from './GlobalStyle.types'

const GlobalStyle = createGlobalStyle(
  (props: GlobalStyleProps): FlattenSimpleInterpolation => css`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400&display=swap');

    html,
    body {
      height: 100%;
    }

    body {
      font-size: ${props.theme.typography.paragraph[3].fontSize};
      line-height: ${props.theme.typography.paragraph[3].lineHeight};
      font-family: ${props.theme.typography.fontFamily};
      color: ${props.theme.colours.primary};
      background: ${props.theme.colours.secondary};
      -webkit-font-smoothing: antialiased !important;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ol,
    ul {
      list-style: none;
    }

    img {
      border: none;
      max-width: 100%;
      height: auto;
    }

    blockquote,
    q {
      quotes: none;

      &::before,
      &::after {
        content: '';
        content: none;
      }
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal;
      font-style: normal;
    }

    .modal-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .modal-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }

    .modal-exit {
      opacity: 0;
    }

    .modal-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity 300ms, transform 300ms;
    }

    .mobile-nav-enter {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 400ms, transform 400ms;
    }

    .mobile-nav-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 400ms, transform 400ms;
    }

    .mobile-nav-exit {
      opacity: 0;
    }

    .mobile-nav-exit-active {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 400ms, transform 400ms;
    }

    .slide-down-enter {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }

    .slide-down-enter-active {
      opacity: 1;
      height: auto;
      transition: opacity 300ms, transform 300ms;
    }

    .slide-down-exit {
      opacity: 0;
      height: 0;
    }

    .slide-down-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity 300ms, transform 300ms;
    }

    .loader-enter {
      opacity: 0;
      transform: scale(1.1);
    }

    .loader-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }

    .loader-exit {
      opacity: 1;
    }

    .loader-exit-active {
      opacity: 0;
      transform: scale(1.1);
      transition: opacity 300ms, transform 300ms;
    }
  `
)

export default GlobalStyle
