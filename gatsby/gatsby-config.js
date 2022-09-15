require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    description:
      'Graphic designer, letterer and visual artist living in Toronto',
    instagram: '@chris_rouleau',
    title: 'Christopher Rouleau',
    twitter: '@Chris_Rouleau',
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
        name: 'Christopher Rouleau',
        short_name: 'Christopher Rouleau',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#F9D44D',
        display: 'standalone',
      },
    },
  ],
};
