const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Ben Hudson | Friend first, Front End Developer second. Probably entertainer third.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ben Hudson | Senior Development Plan',
        short_name: 'Ben Hudson',
        start_url: '/',
        background_color: '#f5b9b3',
        theme_color: '#f5b9b3',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@helpers': path.resolve(__dirname, 'src/helpers'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@sections': path.resolve(__dirname, 'src/sections'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@themes': path.resolve(__dirname, 'src/themes'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
