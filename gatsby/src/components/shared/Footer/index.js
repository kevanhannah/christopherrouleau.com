import React from 'react';
import FeatureLinks from './FeatureLinks';
import Subfooter from './Subfooter';
import { EmailFeature, FooterStyles } from './Styles';

export default function Footer() {
  return (
    <FooterStyles>
      <FeatureLinks />
      <EmailFeature>
        <a href="mailto:hello@christopherrouleau.com">
          hello@christopherrouleau.com
        </a>
      </EmailFeature>
      <Subfooter />
    </FooterStyles>
  );
}
