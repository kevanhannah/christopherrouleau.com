import React from 'react';
import { BadgeStyles } from './Styles';

export default function Badge({ category: { name, slug }, pageType }) {
  const path =
    pageType === 'series' ? `../../${slug.current}` : `../${slug.current}`;

  return <BadgeStyles to={path}>{name}</BadgeStyles>;
}
