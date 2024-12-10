import type { FC, ReactElement } from 'react'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import dayjs from 'dayjs'

import Heading from '@components/Heading'

import * as Styled from './styles/Sidebar.style'

const Sidebar: FC = (): ReactElement => {
  const today = dayjs()
  const birthday = dayjs('1987-06-20')
  const startDate = dayjs('2009-09-01')

  const sidebarContent = [
    {
      name: 'Skills & Technology',
      children: [
        {
          name: 'JavaScript',
        },
        {
          name: 'TypeScript',
        },
        {
          name: 'CSS',
        },
        {
          name: 'Design Systems',
        },
        {
          name: 'Accessibility',
        },
        {
          name: 'Component Architecture',
        },
        {
          name: 'React',
        },
        {
          name: 'Gatsby',
        },
        {
          name: 'Next',
        },
        {
          name: 'WordPress',
        },
      ],
    },
    // {
    //   name: 'Notable Projects',
    //   children: [
    //     {
    //       name: 'Purcy Chair',
    //       url: 'https://purcychair.com/',
    //     },
    //     {
    //       name: 'SocialBuff',
    //       url: 'https://socialbuff.com/',
    //     },
    //     {
    //       name: 'wedo.digital',
    //       url: 'https://www.wedo.digital/',
    //     }
    //   ]
    // },
    {
      name: 'Interests',
      children: [
        {
          name: 'Golf',
        },
        {
          name: 'Football',
        },
        {
          name: 'Video Games',
        },
        {
          name: 'Films',
        },
        {
          name: 'Cooking',
        },
      ],
    },
    {
      name: 'About Me',
      children: [
        {
          name: `${today.diff(birthday, 'year')} years old`
        },
        {
          name: `${today.diff(startDate, 'year')} years experience`
        },
        {
          name: 'Fleet, Hampshire',
        },
        {
          name: 'Two daughters',
        },
        {
          name: 'One wife',
        },
        {
          name: 'One cat',
        },
      ],
    },
    {
      name: 'Contact Details',
      children: [
        {
          name: '07545 342 833',
        },
        {
          name: 'ben@wedo.digital',
          url: 'mailto:ben@wedo.digital',
        },
        {
          name: 'BlueSky',
          url: 'https://bennyhudson.bsky.social',
        },
        {
          name: 'Instagram',
          url: 'http://instagram.com/BennyHudson',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ben-hudson-8a978529/',
        },
        {
          name: 'GitHub',
          url: 'http://github.com/BennyHudson',
        },
        {
          name: 'BitBucket',
          url: 'https://bitbucket.org/BennyHudson/',
        },
      ],
    },
  ]


  return (
    <Styled.Sidebar>
      <Styled.Header>
        <Styled.Avatar to='/'>
          <StaticImage src='../../assets/memoji.png' alt="Ben Hudson | Senior Development Plan" />
        </Styled.Avatar>
        <Heading text='Ben Hudson' size={2} weight={3} noMargin />
        <Heading text='Front End Developer' size={1} />
      </Styled.Header>
      {
        sidebarContent.map((navItem, i) => {
          return (
            <Styled.NavBlock key={i}>
              <Heading size={1} weight={2} text={navItem.name} />
              <ul>
                {
                  navItem.children.map((subNavItem, index) => {
                    return (
                      <li key={index}>
                        {subNavItem.url ?
                          <Styled.NavLink
                            href={subNavItem.url}
                          >
                            {subNavItem.name}
                          </Styled.NavLink>
                          :
                          <>
                            {subNavItem.name}
                          </>
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </Styled.NavBlock>
          )
        })
      }
    </Styled.Sidebar>
  )
}

export default Sidebar
