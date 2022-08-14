import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          instagram
          title
          twitter
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
