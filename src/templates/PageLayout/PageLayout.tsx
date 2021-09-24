import React, { PureComponent, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import GlobalStyle from '@styles/GlobalStyle'
import { hudsonTheme } from '@themes/hudsonTheme'

import Sidebar from '@components/Sidebar'
import Markdown from '@components/Markdown'
import HeadTags from '@components/HeadTags'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps, PageLayoutState } from './PageLayout.types'

class PageLayout extends PureComponent<PageLayoutProps, PageLayoutState> {
  render(): ReactNode {
    return (
      <ThemeProvider theme={hudsonTheme}>
        <GlobalStyle />
        <HeadTags
          seo={{
            title: 'Ben Hudson | Friend first, Front End Developer second. Probably entertainer third.',
          }}
        />
        <Styled.PageLayout>
          <Sidebar />
          <Styled.Content>
            <Styled.PageContent>
              <Styled.Homepage>
                <Styled.Avatar>
                  <StaticImage src='../../assets/thumbs-up.png' alt="Ben Hudson | Senior Development Plan" />
                </Styled.Avatar>
                <Markdown>
                  {this.props.children}
                </Markdown>
              </Styled.Homepage>
            </Styled.PageContent>
          </Styled.Content>
        </Styled.PageLayout>
      </ThemeProvider>
    )
    }
}

export default PageLayout
