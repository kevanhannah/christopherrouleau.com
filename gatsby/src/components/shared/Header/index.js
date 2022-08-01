import React from 'react';
import { Link } from 'gatsby';
import Nav from './Nav';
import Wordmark from '../Wordmark';
import { HeaderStyles } from './Styles';

export default function Header({ className }) {
  return (
    <HeaderStyles className={className}>
      <Link to="/">
        <Wordmark />
      </Link>
      <Nav />
    </HeaderStyles>
  );
}
