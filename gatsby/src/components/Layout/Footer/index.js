import React from 'react';
import { TertiaryButton } from '../../Buttons';
import { FooterLink, FooterLinkList, FooterStyles } from './Styles';
import { Instagram, Newsletter, Twitter } from './Icons';

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <TertiaryButton
          link="https://christopherrouleau.faire.com/welcome/r/personal?signUp=widget&widgetToken=bw_5luuqz5njm"
          text="Shop wholesale"
        />
        <p style={{ marginTop: '16px' }}>© 2022 Christopher Rouleau</p>
      </div>
      <div>
        <FooterLinkList>
          <FooterLink>
            <a
              href="http://christopherrouleau.us11.list-manage2.com/subscribe?u=b1b927bb82834df5ac175e16b&id=32a2f3432e"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Newsletter />
              Newsletter
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="http://instagram.com/chris_rouleau/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
              Instagram
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="http://twitter.com/Chris_Rouleau"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter />
              Twitter
            </a>
          </FooterLink>
        </FooterLinkList>
      </div>
    </FooterStyles>
  );
}
