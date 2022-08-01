import React from 'react';
import { Link } from 'gatsby';
import { NavStyles } from './Styles';

export default function Nav() {
  return (
    <NavStyles>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <a
          href="http://shop.christopherrouleau.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </li>
    </NavStyles>
  );
}
