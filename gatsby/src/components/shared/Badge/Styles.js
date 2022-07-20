import { Link } from 'gatsby';
import styled from 'styled-components';

export const BadgeStyles = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.75em;
  color: #ffffff;
  background-color: var(--primary-blue);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  user-select: none;

  &:hover {
    background-color: var(--primary-blue-lighter);
  }
`;
