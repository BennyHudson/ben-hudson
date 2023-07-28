import 'animate.css'
import type { ReactNode } from 'react'
import React, { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import GlobalStyle from '@styles/GlobalStyle'
import { hudsonTheme } from '@themes/hudsonTheme'

import Sidebar from '@components/Sidebar'
import Heading from '@components/Heading'
import HeadTags from '@components/HeadTags'
import MatchMedia from '@components/MatchMedia'

import * as Styled from './styles/PageLayout.style'

import type { PageLayoutProps, PageLayoutState } from './PageLayout.types'
import Footer from '@components/Footer'

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
          <MatchMedia breakpoint='md' andAbove>
            <Sidebar />
          </MatchMedia>
          <Styled.Content id='scrolly-div'>
            <Styled.PageContent>
              <Styled.Homepage>
                <Styled.HomepageContent>
                  <Styled.Avatar>
                    <StaticImage src='../../assets/thumbs-up.png' alt="Ben Hudson | Senior Development Plan" />
                  </Styled.Avatar>
                  <div>
                    <Heading text='Friend first, front-end developer second.' level={2} size={3} weight={2} noMargin />
                    <Heading text='Probably entertainer third.' level={2} size={3} weight={2} />
                    <Heading text='Primary skills include - but are not limited to - always using the correct gif response on Slack, quoting The Simpsons (but only seasons 1-10, obvs) and regularly trying to leave work early to play golf. Form an orderly queue.' size={1} />
                  </div>
                </Styled.HomepageContent>
              </Styled.Homepage>
              <div>
                {this.props.children}
              </div>
              <Footer />
            </Styled.PageContent>
          </Styled.Content>
        </Styled.PageLayout>
      </ThemeProvider>
    )
  }
}

export default PageLayout
