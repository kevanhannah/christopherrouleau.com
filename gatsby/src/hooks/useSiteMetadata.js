import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          instagram
          siteUrl
          title
          twitter
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
