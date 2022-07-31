import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';

const GridCardItemStyles = styled.li`
  display: block;
  list-style-type: none;
  margin: 0;

  a {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    text-decoration: none;
    font-weight: 300;
    color: var(--black);
    user-select: none;

    p {
      font-size: 1.25em;
      font-weight: 400;
      line-height: 1.4;
      text-transform: uppercase;
    }

    &:visited {
      color: var(--black);
    }

    &:active {
      color: var(--black);
    }
  }

  &:hover {
    a {
      color: var(--primary-blue);
    }

    a > p {
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.25em;
    }

    div.gatsby-image-wrapper {
      opacity: 0.8;
    }
  }
`;

const ItemDateStyles = styled.div`
  text-transform: uppercase;
  font-size: 0.5em;
  font-weight: 400;
  margin: 1em 0 0;
`;

export default function CardGridItem({ date, imageData, link, name }) {
  const image = imageData.length ? imageData[0] : imageData;
  const formattedImage = image.asset.gatsbyImageData;
  const formattedDate = date
    ? format(new Date(`${date} EST`), 'MMMM d, yyyy')
    : null;

  return (
    <GridCardItemStyles>
      <Link to={link}>
        <GatsbyImage image={formattedImage} alt={image.alt} />
        {date && (
          <ItemDateStyles>
            <time dateTime={date}>{formattedDate}</time>
          </ItemDateStyles>
        )}
        <p>{name}</p>
      </Link>
    </GridCardItemStyles>
  );
}
