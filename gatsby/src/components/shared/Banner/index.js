import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const BannerStyles = styled.aside`
  width: 100%;
  background-color: var(--primary-yellow);
  border-bottom: 1px solid var(--light-grey);
  text-align: center;
  padding: 0.75em;

  a {
    font-size: 1em;
    font-weight: 400;
    color: var(--black);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.25em;
      cursor: pointer;
    }
  }
`;

export default function Banner() {
  const {
    sanitySettings: {
      bannerActive: active,
      bannerLink: link,
      bannerText: text,
    },
  } = useStaticQuery(graphql`
    query {
      sanitySettings {
        bannerActive
        bannerLink
        bannerText
      }
    }
  `);

  if (!active) {
    return null;
  }

  return (
    <BannerStyles>
      <a href={link}>{text}</a>
    </BannerStyles>
  );
}
