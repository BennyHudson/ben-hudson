import React, { FC, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

import { HeadTagsProps } from './HeadTags.types'

const HeadTags: FC<HeadTagsProps> = ({ seo }: HeadTagsProps): ReactElement => {
  return (
    <Helmet>
      <If condition={seo.title}>
        <title>{seo.title}</title>
      </If>
      <If condition={seo.metaDesc}>
        <meta name='description' content={seo.metaDesc} />
      </If>
      <If condition={seo.canonical}>
        <link rel='canonical' href={seo.canonical} />
      </If>
      <If condition={seo.opengraphType}>
        <meta property='og:type' content={seo.opengraphType} />
      </If>
      <If condition={seo.opengraphTitle}>
        <meta property='og:title' content={seo.opengraphTitle} />
      </If>
      <If condition={seo.metaDesc}>
        <meta property='og:description' content={seo.metaDesc} />
      </If>
      <If condition={seo.opengraphUrl}>
        <meta property='og:url' content={seo.opengraphUrl} />
      </If>
      <If condition={seo.opengraphImage}>
        <meta property='og:image' content={seo.opengraphImage?.sourceUrl} />
      </If>
      <If condition={seo.twitterTitle}>
        <meta name='twitter:title' content={seo.twitterTitle} />
      </If>
      <If condition={seo.twitterDescription}>
        <meta name='twitter:description' content={seo.twitterDescription} />
      </If>
      <If condition={seo.opengraphImage}>
        <meta
          property='twitter:image'
          content={seo.opengraphImage?.sourceUrl}
        />
      </If>
      <If condition={seo.opengraphImage}>
        <meta name='twitter:card' content={'summary'} />
      </If>
      <If condition={seo.schema}>
        <script type='application/ld+json'>
          {JSON.stringify(seo.schema?.raw)}
        </script>
      </If>
    </Helmet>
  )
}

export default HeadTags
