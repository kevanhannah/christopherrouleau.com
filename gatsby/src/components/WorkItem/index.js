import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';

const WorkItemStyles = styled.li`
  display: block;
  list-style-type: none;

  a {
    display: block;
    text-decoration: none;
    font-size: 1.6em;
    font-weight: 300;
    color: var(--black);
    user-select: none;

    p {
      font-size: 0.8em;
      font-weight: 400;
      line-height: 1.4;
      margin: 0.5em 0 0;
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
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
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

export default function WorkItem({ date, imageData, link, name }) {
  const image = imageData.length ? imageData[0] : imageData;
  const formattedImage = image.asset.gatsbyImageData;
  const formattedDate = date
    ? format(new Date(`${date} EST`), 'MMMM d, yyyy')
    : null;

  return (
    <WorkItemStyles>
      <Link to={link}>
        <GatsbyImage image={formattedImage} alt={image.alt} />
        {date && (
          <ItemDateStyles>
            <time dateTime={date}>{formattedDate}</time>
          </ItemDateStyles>
        )}
        <p>{name}</p>
      </Link>
    </WorkItemStyles>
  );
}
