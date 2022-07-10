module.exports = {
  siteMetadata: {
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
  ],
};
