import React from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';
import Badge from '../../shared/Badge';
import { PrimaryButton } from '../../shared/Buttons';
import Gallery from '../../shared/Gallery';
import {
  DescriptionWrapper,
  GalleryWrapper,
  ItemTitle,
  SeriesExcerpt,
  WorkButtonRow,
  WorkDetailsHeader,
  WorkDetailStyles,
} from './Styles';
import ShareButton from '../../shared/ShareButton';

export default function WorkDetail({
  category,
  description,
  forSale,
  images,
  metaDescription,
  metaImageURL,
  name,
  pageType,
  pathname,
  series,
  storeUrl,
  year,
}) {
  return (
    <WorkDetailStyles>
      <GalleryWrapper>
        <Gallery images={pageType === 'series' ? images[0] : images} />
        {pageType === 'work' && (
          <WorkButtonRow>
            {forSale && storeUrl && (
              <PrimaryButton link={storeUrl} text="Buy in store" />
            )}
            <ShareButton
              description={metaDescription}
              image={metaImageURL}
              pathname={pathname}
            />
          </WorkButtonRow>
        )}
      </GalleryWrapper>
      <WorkDetailsHeader>
        <Badge category={category} />
        <div>
          <ItemTitle>{name}</ItemTitle>
          <time dateTime={year}>({year})</time>
        </div>
      </WorkDetailsHeader>
      <DescriptionWrapper>
        <PortableText value={description} />
      </DescriptionWrapper>
      {series && (
        <SeriesExcerpt>
          <h3>From {series.name}</h3>
          <p>{series.excerpt}</p>
          <Link to="../">More about {series.name}</Link>
        </SeriesExcerpt>
      )}
    </WorkDetailStyles>
  );
}
