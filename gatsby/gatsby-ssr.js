import React, { Fragment } from 'react';
import GlobalStyles from './src/components/Layout/styles/GlobalStyles';
import Typography from './src/components/Layout/styles/Typography';

export function wrapPageElement({ element, props }) {
  if (props.location.pathname === '/') {
    return;
  }

  return (
    <Fragment {...props}>
      <GlobalStyles />
      <Typography />
      {element}
    </Fragment>
  );
}
