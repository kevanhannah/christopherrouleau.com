import React from 'react';
import parseSanityLink from '../../../utils/parseSanityLink';
import { TextLink } from '../../Buttons';

export function renderFeatureItem(item) {
  const dateRange = [];

  if (item.startDate) {
    dateRange.push(item.startDate.toString().substring(0, 4));
  }

  if (item.endDate) {
    dateRange.push(`-${item.endDate.toString().substring(2, 4)}`);
  }

  if (item.item[0]._type === 'plainTextItem') {
    return (
      <>
        {item.item[0].text}
        {dateRange.length ? (
          <span style={{ fontWeight: '300' }}>{` (${dateRange.join(
            ''
          )})`}</span>
        ) : (
          ''
        )}
      </>
    );
  }

  const parsedLink = parseSanityLink(item.item[0]);

  return (
    <>
      <TextLink internal={parsedLink === 'internal'} link={parsedLink.url}>
        {parsedLink.text}
      </TextLink>
      {dateRange.length ? ` (${dateRange.join('')})` : ''}
    </>
  );
}
