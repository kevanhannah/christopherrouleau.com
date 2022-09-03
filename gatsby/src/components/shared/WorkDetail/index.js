import React from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';
import Badge from '../Badge';
import { PrimaryButton } from '../Buttons';
import Gallery from '../Gallery';
import {
  ItemTitle,
  SeriesExcerpt,
  WorkButtonRow,
  WorkDetailsHeader,
  WorkDetailStyles,
  WorkInformationPanel,
} from './Styles';
import ShareButton from '../ShareButton';

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
      <WorkInformationPanel>
        <WorkDetailsHeader>
          <Badge category={category} />
          <div>
            <ItemTitle>{name}</ItemTitle>
            <time dateTime={year}>({year})</time>
          </div>
        </WorkDetailsHeader>
        <div>
          <PortableText value={description} />
        </div>
        {pageType === 'work' && (
          <>
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
            {series && (
              <SeriesExcerpt>
                <h3>From {series.name}</h3>
                <p>{series.excerpt}</p>
                <Link to="../">More about {series.name}</Link>
              </SeriesExcerpt>
            )}
          </>
        )}
      </WorkInformationPanel>
      <Gallery images={images} />
    </WorkDetailStyles>
  );
}
