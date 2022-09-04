import React from 'react';
import { AboutPageHeading, AboutPageSubheading } from './Styles';

export default {
  block: {
    h3: ({ children }) => <AboutPageHeading>{children}</AboutPageHeading>,
    h4: ({ children }) => <AboutPageSubheading>{children}</AboutPageSubheading>,
  },
};
