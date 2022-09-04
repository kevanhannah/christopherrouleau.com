import React from 'react';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AboutPageLead, AboutPageStyles, AboutPageTitle } from './Styles';
import textComponents from './textComponents';

export default function AboutPage({ content, heading, image, lead }) {
  return (
    <AboutPageStyles>
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        alt={image.alt}
        // style={{ float: 'right', marginBottom: '1em', marginLeft: '1em' }}
      />
      <AboutPageTitle>{heading}</AboutPageTitle>
      <AboutPageLead>{lead}</AboutPageLead>
      <PortableText value={content} components={textComponents} />
    </AboutPageStyles>
  );
}
