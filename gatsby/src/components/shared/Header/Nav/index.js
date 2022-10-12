import React from 'react';
import { Link } from 'gatsby';
import { HighlightedMenuItem, MenuItem, NavStyles } from './Styles';

export default function Nav() {
  return (
    <nav role="navigation">
      <NavStyles>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
        <HighlightedMenuItem>
          <a
            href="http://shop.christopherrouleau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>
        </HighlightedMenuItem>
      </NavStyles>
    </nav>
  );
}
