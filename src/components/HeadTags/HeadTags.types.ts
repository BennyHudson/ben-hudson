export interface HeadTagsProps {
  seo: {
    metaDesc?: string;
    metaKeywords?: string;
    canonical?: string;
    opengraphType?: string;
    opengraphUrl?: string;
    opengraphTitle?: string;
    opengraphSiteName?: string;
    opengraphPublisher?: string;
    opengraphPublishedTime?: string;
    opengraphModifiedTime?: string;
    opengraphImage?: {
      sourceUrl?: string;
    };
    twitterTitle?: string;
    twitterDescription?: string;
    title?: string;
    schema?: {
      articleType?: string;
      pageType?: string;
      raw?: string;
    };
  };
}
