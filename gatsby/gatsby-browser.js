import React, { Fragment } from 'react';
import GlobalStyles from './src/components/shared/GlobalStyles';
import Typography from './src/components/shared/Typography';
import Layout from './src/components/shared/Layout';

export function wrapPageElement({ element, props }) {
  if (props.location.pathname === '/') {
    return;
  }

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout>{element}</Layout>
    </>
  );
}
