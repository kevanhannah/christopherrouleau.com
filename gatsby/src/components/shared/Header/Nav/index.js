import React from 'react';
import { Link } from 'gatsby';
import { HighlightItem, NavStyles } from './Styles';

export default function Nav() {
  return (
    <nav role="navigation">
      <NavStyles>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <HighlightItem>
          <a
            href="http://shop.christopherrouleau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>
        </HighlightItem>
      </NavStyles>
    </nav>
  );
}
