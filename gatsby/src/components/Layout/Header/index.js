import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Wordmark from '../../Wordmark';

const HeaderStyles = styled.header`
  margin: 3em 0;
  display: flex;
  justify-content: space-between;
`;

export default function Header({ className }) {
  return (
    <HeaderStyles className={className}>
      <Link to="/" style={{ minWidth: '25%' }}>
        <Wordmark />
      </Link>
      <Nav />
    </HeaderStyles>
  );
}
