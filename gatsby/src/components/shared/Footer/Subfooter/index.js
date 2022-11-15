import React from 'react';
import { TertiaryButton } from '../../Buttons';
import {
  CopyrightSection,
  SubfooterLink,
  SubfooterLinkList,
  SubfooterStyles,
} from './Styles';
import { Instagram, Newsletter, Twitter } from './Icons';

export default function Subfooter() {
  const copyrightYear = new Date().getFullYear();

  return (
    <div>
      <SubfooterStyles>
        <div>
          <TertiaryButton
            link="https://christopherrouleau.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_5luuqz5njm"
            text="Shop wholesale"
            ariaLabel="Shop wholesale"
          />
          <TertiaryButton
            link="https://swishembassy.ca/collections/christopher-rouleau"
            text="Shop T-shirts"
            ariaLabel="Shop T-shirts"
          />
        </div>
        <div>
          <SubfooterLinkList>
            <SubfooterLink>
              <a
                href="http://christopherrouleau.us11.list-manage2.com/subscribe?u=b1b927bb82834df5ac175e16b&id=32a2f3432e"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Newsletter"
              >
                <Newsletter />
                Newsletter
              </a>
            </SubfooterLink>
            <SubfooterLink>
              <a
                href="http://instagram.com/chris_rouleau/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram />
                Instagram
              </a>
            </SubfooterLink>
            <SubfooterLink>
              <a
                href="http://twitter.com/Chris_Rouleau"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter />
                Twitter
              </a>
            </SubfooterLink>
          </SubfooterLinkList>
        </div>
      </SubfooterStyles>
      <CopyrightSection>
        <p>
          © {copyrightYear} Christopher Rouleau. All rights reserved. (Please
          don't steal my stuff.)
        </p>
        <p>
          Website:{' '}
          <a
            href="https://www.twitter.com/kevanh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kevan Hannah
          </a>
          . Portrait photography:{' '}
          <a
            href="https://brennansarich.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brennan Sarich
          </a>
          . Typeface:{' '}
          <a
            href="https://jonathanballdesign.com/work/basecoat/index.php/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Basecoat
          </a>{' '}
          by Jonathan Ball.
        </p>
      </CopyrightSection>
    </div>
  );
}
