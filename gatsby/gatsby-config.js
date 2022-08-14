module.exports = {
  siteMetadata: {
    description:
      'Graphic designer, letterer and visual artist living in Toronto',
    title: 'Christopher Rouleau',
    siteUrl: 'https://christopherrouleau.com',
    twitter: '@Chris_Rouleau',
    instagram: '@chris_rouleau',
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
        icon: 'src/assets/images/favicon.svg',
        legacy: false,
        name: 'Christopher Rouleau',
        short_name: 'Christopher Rouleau',
        start_url: '/',
        background_color: '##ffffff',
        theme_color: '#a2466c',
        display: 'standalone',
      },
    },
  ],
};
