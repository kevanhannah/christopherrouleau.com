import { Link } from 'gatsby';
import styled from 'styled-components';

export const BadgeStyles = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.65em;
  color: #ffffff;
  background-color: var(--primary-blue);
  padding: 4px 8px;
  border-radius: 4px;
  user-select: none;

  &:hover {
    background-color: var(--primary-blue-lighter);
  }
`;
