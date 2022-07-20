import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { HeroStyles } from './Styles';
import { SecondaryButton } from '../../shared/Buttons';
import parseSanityLink from '../../../utils/parseSanityLink';

export default function Hero({
  heroContent: { heading, image, link, tagline },
}) {
  const parsedLink = parseSanityLink(link[0]);

  return (
    <HeroStyles>
      <div className="heroPromoInner">
        <GatsbyImage
          image={image.asset.gatsbyImageData}
          alt={image.alt}
          imgStyle={{
            boxShadow: '0.5em 0.5em 0 var(--primary-blue-darker)',
            userSelect: 'none',
          }}
        />
        <div>
          <h2>{heading}</h2>
          <p>{tagline}</p>
          <SecondaryButton
            internal={parsedLink === 'internal'}
            link={parsedLink.url}
            text={parsedLink.text}
          />
        </div>
      </div>
    </HeroStyles>
  );
}

export const query = graphql`
  fragment HeroFragment on SanityHome {
    hero {
      image {
        alt
        asset {
          gatsbyImageData(
            aspectRatio: 1.78
            width: 500
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
      heading
      link {
        ... on SanityLinkExternal {
          url
          linkText
          _type
        }
        ... on SanityLinkInternal {
          _type
          linkText
          reference {
            ... on SanitySeries {
              name
              slug {
                current
              }
              id
            }
            ... on SanityWork {
              id
              name
              series {
                slug {
                  current
                }
              }
              slug {
                current
              }
            }
            ... on SanityCategory {
              id
              name
              slug {
                current
              }
            }
          }
        }
      }
      tagline
    }
  }
`;
