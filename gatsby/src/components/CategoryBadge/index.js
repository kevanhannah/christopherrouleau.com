import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CategoryBadgeStyles = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.65em;
  color: #ffffff;
  background-color: var(--primary-blue);
  margin: 4px 4px 4px 0;
  padding: 4px 8px;
  border-radius: 4px;
  user-select: none;

  &:hover {
    background-color: var(--primary-blue-lighter);
  }
`;

export default function CategoryBadge({ category: { name, slug }, pageType }) {
  const path =
    pageType === 'series' ? `../../${slug.current}` : `../${slug.current}`;

  return <CategoryBadgeStyles to={path}>{name}</CategoryBadgeStyles>;
}
