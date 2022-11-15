import React from 'react';
import { Link } from 'gatsby';
import { HighlightedMenuItem, MenuItem, NavStyles } from './Styles';

export default function Nav() {
  return (
    <nav role="navigation" style={{ display: 'flex' }}>
      <NavStyles>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
        <MenuItem>
          <a
            href="http://instagram.com/chris_rouleau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
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
