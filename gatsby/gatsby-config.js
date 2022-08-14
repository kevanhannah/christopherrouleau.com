module.exports = {
  siteMetadata: {
    description:
      'Graphic designer, letterer and visual artist living in Toronto',
    instagram: '@chris_rouleau',
    title: 'Christopher Rouleau',
    twitter: '@Chris_Rouleau',
    siteUrl:
      process.env.NODE_ENV === 'production'
        ? process.env.SITE_URL
        : 'localhost:8000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9oo09ljx',
        dataset: 'production',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
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
