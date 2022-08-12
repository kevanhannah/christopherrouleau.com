import React from 'react';
import { BadgeStyles } from './Styles';

export default function Badge({ category: { name, slug } }) {
  const path = `../../${slug.current}`;

  return <BadgeStyles to={path}>{name}</BadgeStyles>;
}
