import styled, { FlattenSimpleInterpolation, css } from 'styled-components'

import { StyledMarkdownProps } from './Markdown.style.types'

export const Markdown = styled.div((props: StyledMarkdownProps): FlattenSimpleInterpolation => css`
  p {
    margin-bottom: ${props.theme.spacing.fixed[2]}px;
  }

  a {
    color: #c0392b;
    font-weight: 600;
  }

  h1 {
    font-weight: 600;
    font-size: ${props.theme.typography.heading[5].fontSizeMobile};
    line-height: ${props.theme.typography.heading[5].lineHeightMobile};
    margin-bottom: ${props.theme.spacing.fixed[1]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    font-weight: 600;
    font-size: ${props.theme.typography.heading[4].fontSizeMobile};
    line-height: ${props.theme.typography.heading[4].lineHeightMobile};
    margin-bottom: ${props.theme.spacing.fixed[2]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-weight: 600;
    font-size: ${props.theme.typography.heading[3].fontSizeMobile};
    line-height: ${props.theme.typography.heading[3].lineHeightMobile};
    margin-bottom: ${props.theme.spacing.fixed[2]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h4 {
    font-weight: 600;
    font-size: ${props.theme.typography.heading[2].fontSizeMobile};
    line-height: ${props.theme.typography.heading[2].lineHeightMobile};
    margin-bottom: ${props.theme.spacing.fixed[1]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h5 {
    font-weight: 600;
    font-size: ${props.theme.typography.heading[1].fontSizeMobile};
    line-height: ${props.theme.typography.heading[1].lineHeightMobile};
    margin-bottom: ${props.theme.spacing.fixed[1]}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  code {
    display: inline-block;
    padding: ${props.theme.spacing.fixed[1] / 4}px ${props.theme.spacing.fixed[1]}px;
    background: #ededed;
    border-radius: 4px;
    font-size: 14px;
  }

  pre {
    padding: ${props.theme.spacing.fixed[3]}px;
    background: #ededed;
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 8px;
    margin: ${props.theme.spacing.fixed[4]}px 0 0 0;
    font-size: ${props.theme.typography.paragraph[2].fontSize};
    line-height: ${props.theme.typography.paragraph[2].lineHeight};

    code {
      display: none ;
    }
  }

  deckgo-highlight-code {
    box-shadow: none;
    
    code {
      display: none ;
    }
  }

  hr {
    color: ${props.theme.colours.secondary};
    border: 1px solid ${props.theme.colours.pink};
    border-top: none;
    margin: ${props.theme.spacing.fixed[4]}px 0;
  }
`)
