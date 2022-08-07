import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format, parseISO } from 'date-fns';
import { CardGridItemStyles, ItemDateStyles } from './Styles';

export default function CardGridItem({ date, imageData, link, name }) {
  const image = imageData.length ? imageData[0] : imageData;
  const formattedImage = image.asset.gatsbyImageData;
  const formattedDate = date && format(parseISO(date), 'MMMM d, yyyy');

  return (
    <CardGridItemStyles>
      <Link to={link}>
        <GatsbyImage
          image={formattedImage}
          alt={image.alt}
          aria-hidden
          role="presentation"
        />
        {date && (
          <ItemDateStyles dateTime={date}>{formattedDate}</ItemDateStyles>
        )}
        <p>{name}</p>
      </Link>
    </CardGridItemStyles>
  );
}
