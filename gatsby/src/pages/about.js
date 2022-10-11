import React from 'react';
import { graphql } from 'gatsby';
import AboutPage from '../components/AboutPage';
import SEO from '../components/shared/SEO';

export default function BlogPage({ data: { aboutPageContent } }) {
  return (
    <AboutPage
      content={aboutPageContent.pageContent}
      heading={aboutPageContent.pageHeading}
      image={aboutPageContent.introImage}
      lead={aboutPageContent.pageLead}
    />
  );
}

export function Head() {
  return <SEO title="About - Christopher Rouleau" />;
}

export const query = graphql`
  query {
    aboutPageContent: sanityAbout(_id: { eq: "about" }) {
      pageHeading
      pageLead
      pageContent: _rawPageContent
      introImage {
        asset {
          gatsbyImageData(
            aspectRatio: 1
            placeholder: DOMINANT_COLOR
            width: 400
          )
        }
        alt
      }
    }
  }
`;
