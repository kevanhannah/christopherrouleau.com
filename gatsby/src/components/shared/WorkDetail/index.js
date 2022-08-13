import React from 'react';
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';
import Badge from '../Badge';
import { PrimaryButton } from '../Buttons';
import Gallery from '../Gallery';
import {
  ItemTitle,
  SeriesExcerpt,
  WorkDetailsHeader,
  WorkDetailStyles,
  WorkInformationPanel,
} from './Styles';

export default function WorkDetail({
  category,
  description,
  forSale,
  images,
  name,
  pageType,
  series,
  storeUrl,
  year,
}) {
  console.log(pageType);
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
        {forSale && storeUrl && (
          <PrimaryButton link={storeUrl} text="Buy in store" />
        )}
        {pageType === 'work' && series && (
          <SeriesExcerpt>
            <h3>From {series.name}</h3>
            <p>{series.excerpt}</p>
            <Link to="../">More about {series.name}</Link>
          </SeriesExcerpt>
        )}
      </WorkInformationPanel>
      <Gallery images={images} />
    </WorkDetailStyles>
  );
}
