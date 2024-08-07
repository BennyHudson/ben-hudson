import type { FC, ReactElement } from 'react'
import React from 'react'

import CardList from '@components/CardList'

const IndexPage: FC = (): ReactElement => {
  const milestones = [
    {
      type: 'life-event',
      title: 'Born',
      location: 'Fleet, Hampshire',
      time: 'June 1987'
    },
    {
      type: 'education',
      title: 'Heatherside Infants School',
      location: 'Fleet, Hampshire',
      time: 'September 1991'
    },
    {
      type: 'education',
      title: 'All Saints Junior School',
      location: 'Fleet, Hampshire',
      time: 'September 1994'
    },
    {
      type: 'education',
      title: 'Calthorpe Park Secondary School',
      location: 'Fleet, Hampshire',
      time: 'September 1998'
    },
    {
      type: 'career',
      title: 'Paperboy, Martins Newsagents',
      location: 'Fleet, Hampshire',
      time: 'January 2000'
    },
    {
      type: 'career',
      title: 'Sales Advisor, Burton Menswear',
      location: 'Fleet, Hampshire',
      time: 'September 2003'
    },
    {
      type: 'education',
      title: 'The 6th Form College',
      location: 'Farnborough, Hampshire',
      time: 'September 2003'
    },
    {
      type: 'career',
      title: 'Top-Level Sales Advisor, Burton Menswear',
      location: 'Fleet, Hampshire',
      time: 'September 2005'
    },
    {
      type: 'life-event',
      title: 'Moved to Leicester',
      location: 'Leicester',
      time: 'September 2006'
    },
    {
      type: 'education',
      title: 'Media Production, De Montfort University',
      location: 'Leicester',
      time: 'September 2006'
    },
    {
      type: 'life-event',
      title: 'Moved to Fleet',
      location: 'Fleet, Hampshire',
      time: 'June 2009'
    },
    {
      type: 'career',
      title: 'Assistant Online Designer, GAME',
      location: 'Basingstoke, Hampshire',
      time: 'September 2009'
    },
    {
      type: 'career',
      title: 'Senior Online Designer, GAME',
      location: 'Basingstoke, Hampshire',
      time: 'August 2011'
    },
    {
      type: 'career',
      title: 'Digital Designer, Electronic Arts',
      location: 'Guildford, Surrey',
      time: 'March 2012'
    },
    {
      type: 'career',
      title: 'Freelance Front-End Developer',
      location: 'Fleet, Hampshire',
      time: 'April 2013'
    },
    {
      type: 'career',
      title: 'UX Developer, Volume',
      location: 'Wokingham, Berkshire',
      time: 'August 2014'
    },
    {
      type: 'career',
      title: 'Digital Director, Brandtastic',
      location: 'Fleet, Hampshire',
      time: 'March 2015'
    },
    {
      type: 'life-event',
      title: 'Moved to Odiham',
      location: 'Odiham, Hampshire',
      time: 'August 2016'
    },
    {
      type: 'life-event',
      title: 'Married Aimee',
      location: 'Upper Froyle, Hampshire',
      time: 'June 2017'
    },
    {
      type: 'career',
      title: 'Software Engineer, Vodafone',
      location: 'Newbury, Berkshire / London',
      time: 'September 2017'
    },
    {
      type: 'life-event',
      title: 'Had Isla',
      location: 'Frimley, Surrey',
      time: 'February 2020'
    },
    {
      type: 'life-event',
      title: 'Moved to Fleet',
      location: 'Fleet',
      time: 'March 2021'
    },
    {
      type: 'career',
      title: 'Senior Software Engineer, Vodafone',
      location: 'London',
      time: 'March 2022'
    },
    {
      type: 'life-event',
      title: 'Had Ruby',
      location: 'Frimley, Surrey',
      time: 'August 2023'
    },
  ]

  return (
    <CardList milestones={milestones} />
  )
}

export default IndexPage
