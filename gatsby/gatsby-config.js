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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
