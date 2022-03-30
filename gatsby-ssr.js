import React from 'react'
import PageLayout from './src/templates/PageLayout'

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageLayout locationPath={props.location.pathname}>{element}</PageLayout>
  )
}
