import React from 'react';
import { AboutPageHeading } from './Styles';

export default {
  block: {
    h3: ({ children }) => <AboutPageHeading>{children}</AboutPageHeading>,
  },
};
